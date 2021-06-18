import BeneficiaryGrid from 'components/Beneficiaries/BeneficiaryGrid';
import { ContractsContext } from 'context/Web3/contracts';
import { BaseProposal } from 'interfaces/beneficiaries';
import { useContext, useEffect, useState } from 'react';
import { getProposals } from 'utils/getProposals';

export default function BeneficiaryProposalPage(): JSX.Element {
  const { contracts } = useContext(ContractsContext);
  const [proposals, setProposals] = useState<BaseProposal[]>([]);

  useEffect(() => {
    if (contracts) {
      getProposals(contracts).then((res) => setProposals(res));
    }
  }, [contracts]);

  return (
    <BeneficiaryGrid
      title={'Eligible Beneficiaries'}
      subtitle={
        'You choose which social initiatives are included in grant elections. Browse and vote on beneficiary nominations'
      }
      cardProps={proposals}
      isProposal
    />
  );
}