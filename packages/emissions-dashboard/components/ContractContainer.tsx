import React from 'react';
import { AreaBarChart } from './AreaBarChart';
import { StatsRow } from './StatsRow';

export const ContractContainer = ({ emissionSummaryStats, contract, data }) => {
  return (
    <div className="py-10 mx-8">
      <div className="max-w-7xl">
        <div className="mt-2 mb-8">
          <dt>
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              {contract.name}
            </h1>
          </dt>
          <dd className=" text-base text-gray-500">
            19 Aug 2021 - 09:12 (UTC)
          </dd>
        </div>
      </div>

      <div className="max-w-7xl">
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          <div className="rounded-lg bg-white overflow-hidden shadow py-6">
            <AreaBarChart data={data} height={224} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl">
        <StatsRow stats={emissionSummaryStats} />
      </div>
    </div>
  );
};