import { useContext, useEffect, useState } from 'react';
import { store } from 'app/store';

import { DummyBeneficiaryProposal } from '../../pages/beneficiary-proposals/interfaces';
import CurrentStandings from './CurrentStandings';
import { beneficiaryProposalFixture } from 'fixtures/beneficiaryProposals';

// TODO: Add types
const CompletedVoting = (beneficiaryProposal: DummyBeneficiaryProposal) => {
  return (
    <div className="content-center mx-48">
      <div className="grid my-2 justify-items-stretch">
        <span className="mx-4  w-2/3 justify-self-center flex flex-row justify-between">
          {beneficiaryProposal.votesFor > beneficiaryProposal.votesAgainst ? (
            <div>
              <p className="my-8 mx-5 text-3xl text-black sm:text-4xl lg:text-5xl text-center">
                Beneficiary passed nomination proposal process.
              </p>
              <p className="mb-4 text-base font-medium text-gray-900 text-center">
                It is now eligible to receive grants.
              </p>
            </div>
          ) : (
            <div>
              <p className="my-8 mx-5 text-3xl text-black sm:text-4xl lg:text-5xl text-center">
                Beneficiary did not pass nomination proposal process.
              </p>
              <p className="mb-4 text-base font-medium text-gray-900 text-center">
                It is ineligible to receive grants.
              </p>
            </div>
          )}
        </span>
      </div>
      <CurrentStandings {...beneficiaryProposal} />
    </div>
  );
};

export default CompletedVoting;
