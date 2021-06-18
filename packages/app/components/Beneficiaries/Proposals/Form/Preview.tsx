import { Web3Provider } from '@ethersproject/providers';
import { getBytes32FromIpfsHash } from '@popcorn/utils/ipfsHashManipulation';
import { useWeb3React } from '@web3-react/core';
import BeneficiaryPage from 'components/Beneficiaries/BeneficiaryPage/BeneficiaryPage';
import { setSingleActionModal } from 'context/actions';
import { store } from 'context/store';
import { connectors } from 'context/Web3/connectors';
import { ContractsContext } from 'context/Web3/contracts';
import { BigNumber } from 'ethers';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { formatAndRoundBigNumber } from 'utils/formatBigNumber';
import { defaultFormData, Form, FormStepProps } from './ProposalForm';

const success = () => toast.success('Successful upload to IPFS');
const loading = () => toast.loading('Uploading to IPFS...');
const uploadError = (errMsg: string) => toast.error(errMsg);

export default function Preview({
  form,
  navigation,
  visible,
}: FormStepProps): JSX.Element {
  const context = useWeb3React<Web3Provider>();
  const { dispatch } = useContext(store);
  const { contracts } = useContext(ContractsContext);
  const { library, account, activate, active } = context;
  const router = useRouter();
  const [formData, setFormData] = form;
  const { currentStep, setCurrentStep, setStepLimit } = navigation;
  const [proposalBond, setProposalBond] = useState<BigNumber>();

  async function checkPreConditions(): Promise<boolean> {
    if (!contracts) {
      return false;
    }
    if (!account) {
      dispatch(
        setSingleActionModal({
          content: 'Connect your wallet to continue',
          title: 'Connect your Wallet',
          visible: true,
          type: 'error',
          onConfirm: {
            label: 'Connect',
            onClick: () => {
              activate(connectors.Injected);
              dispatch(setSingleActionModal(false));
            },
          },
        }),
      );
      return false;
    }
    const balance = await contracts.pop.balanceOf(account);
    if (proposalBond > balance) {
      dispatch(
        setSingleActionModal({
          content: `In order to create a proposal you need to post a Bond of ${formatAndRoundBigNumber(
            proposalBond,
          )} POP`,
          title: 'You need more POP',
          visible: true,
          type: 'error',
          onConfirm: {
            label: 'Close',
            onClick: () => {
              dispatch(setSingleActionModal(false));
            },
          },
        }),
      );
      return false;
    }
    return true;
  }

  async function uploadJsonToIpfs(submissionData: Form): Promise<void> {
    if (await checkPreConditions()) {
      console.log('precondition success');
      var myHeaders = new Headers();
      myHeaders.append('pinata_api_key', process.env.PINATA_API_KEY);
      myHeaders.append('pinata_secret_api_key', process.env.PINATA_API_SECRET);
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify(submissionData);
      loading();
      const ipfsHash = await fetch(
        'https://api.pinata.cloud/pinning/pinJSONToIPFS',
        {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
        },
      )
        .then((response) => response.text())
        .then((result) => {
          return JSON.parse(result).IpfsHash;
        })
        .catch((error) => {
          uploadError('Error uploading submission data to IPFS');
        });

      await (
        await contracts.pop
          .connect(library.getSigner())
          .approve(contracts.beneficiaryGovernance.address, proposalBond)
      ).wait();
      await contracts.beneficiaryGovernance
        .connect(library.getSigner())
        .createProposal(
          submissionData.ethereumAddress,
          getBytes32FromIpfsHash(ipfsHash),
          0,
        );
      toast.dismiss();
      success();
      setTimeout(() => router.push(`/beneficiary-proposals/${account}`), 1000);
      clearLocalStorage();
    }
  }

  function clearLocalStorage() {
    setCurrentStep(1);
    setStepLimit(1);
    setFormData(defaultFormData);
  }

  async function getProposalBond(): Promise<BigNumber> {
    const proposalDefaultConfigurations =
      await contracts.beneficiaryGovernance.DefaultConfigurations();
    return proposalDefaultConfigurations.proposalBond;
  }

  useEffect(() => {
    if (contracts) {
      getProposalBond().then((proprosalBond) => setProposalBond(proprosalBond));
    }
  }, []);

  return (
    visible && (
      <div>
        <div className="md:flex md:items-center md:justify-between my-8 mx-4">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Preview Beneficiary Nomination Proposal below
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                setCurrentStep(currentStep - 1);
              }}
            >
              Back/Edit
            </button>
            <button
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                uploadJsonToIpfs(formData);
              }}
            >
              Submit
            </button>
          </div>
        </div>

        <BeneficiaryPage
          displayData={formData}
          isProposalPreview
        />
      </div>
    )
  );
}