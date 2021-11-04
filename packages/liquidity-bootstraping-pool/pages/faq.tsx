import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      router.replace(window.location.pathname);
    }
  }, [router.pathname]);

  return (
    <div className="font-landing">
      <div className="hidden lg:flex flex-col w-full h-full">
        <header className="w-full bg-primary">
          <nav className="w-10/12 mx-auto pt-12 pb-4 border-b border-primaryLight flex flex-row items-center justify-between">
            <div>
              <Link href="/" passHref>
                <a>
                  <img
                    src="/images/textLogo.png"
                    alt="Logo"
                    className="h-12"
                  ></img>
                </a>
              </Link>
            </div>
            <div className="space-x-8">
              <Link href="/guide" passHref>
                <a
                  className="font-light text-base hover:text-blue-600"
                  target="_window"
                >
                  Step-by-Step Guide
                </a>
              </Link>
              <Link href="/faq" passHref>
                <a
                  className="font-light text-base hover:text-blue-600"
                  target="_window"
                >
                  Liquidity Bootstrapping FAQ
                </a>
              </Link>
            </div>
          </nav>
        </header>
        <section className="">
          <div
            className="bg-upper-faq-pattern flex-shrink-0 flex-grow-0 w-screen h-auto"
            style={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="w-10/12 mx-auto flex flex-col lg:flex-row justify-between pb-20 items-center">
              <div className="w-full pt-32">
                <div>
                  <h1 className="text-center font-normal text-6xl leading-snug mb-2 font-landing">
                    Liquidity Bootstrapping FAQ
                  </h1>
                  <p className="w-3/5 mx-auto text-center text-lg font-landing mb-10">
                    Popcorn Liquidity Bootstrapping Event Details:
                  </p>

                  <p className="w-3/5 mx-auto text-center text-lg font-landing font-semibold">
                    $POP Tokens Offered: 5,000,000
                  </p>
                  <p className="w-3/5 mx-auto text-center text-lg font-landing font-semibold mb-10">
                    When? November 26, 2021 16:30 UTC till November 28, 2021
                    ~16:30pm UTC.
                  </p>
                  <p className="w-3/5 mx-auto text-center text-lg font-landing mb-10">
                    The liquidity bootstrapping event will take place on
                    Balancer, a decentralized exchange where the $POP token will
                    be offered in a Liquidity Bootstrapping Pool. All proceeds
                    will go to the Popcorn Treasury, a smart contract entirely
                    controlled by Popcorn token holders. The intention is to
                    bootstrap liquidity on decentralized exchanges through a
                    fair launch mechanism.
                  </p>

                  <p className="w-3/5 mx-auto text-center text-lg font-landing mb-10">
                    The Popcorn Team will tweet out the contract address on the
                    official Popcorn Twitter account and the Popcorn blog, and
                    you will be able to track the status of the LBP event on
                    lbp.popcorn.network. Before proceeding, verify that the
                    contract address comes from an official source and that the
                    Balancer address is the same as the contract address —
                    everything else should be considered a scam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="grid grid-cols-4">
            <div>
              <img src="images/faqpopcorn.svg"></img>
            </div>
            <div className="col-span-2">
              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  What is the purpose of this event?
                </p>
                <p className="text-md mx-auto ">
                  This is the first opportunity for the general public to buy
                  $POP and participate in the governance of the network. The
                  purpose of this liquidity bootstrapping pool is to:
                </p>
                <ul className="list-inside list-disc">
                  <li className="text-md mx-auto ">
                    Distribute governance power to a broader community outside
                    of the core team, advisors, and investors
                  </li>
                  <li className="text-md mx-auto ">
                    Inject liquidity into the Popcorn ecosystem
                  </li>
                  <li className="text-md mx-auto ">
                    Initiate price discovery for $POP
                  </li>
                </ul>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  What is a Liquidity Bootstrapping Pool?
                </p>
                <p className="text-md mx-auto ">
                  A liquidity bootstrapping pool allows projects to create
                  meaningful liquidity and distribution at launch, resulting in
                  a fully customizable token distribution mechanic that gives
                  teams and governance token holders control and flexibility for
                  the long term.
                </p>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  What is Balancer and How Does It Work?
                </p>
                <p className="text-md mx-auto ">
                  Balancer is a decentralized exchange platform built on
                  Ethereum that is designed to provide an open alternative to
                  swap tokens in a permissionless environment. Users can also
                  use Balancer to create liquidity pools that can be used to
                  generate yield on trades.
                </p>
                <p className="text-md mx-auto ">
                  Balancer’s Liquidity Bootstrapping Pool (LBP) is a method used
                  for launching a token with low capital requirements, where a
                  two-token pool with the project and collateral token are set
                  up with weights that automatically adjust over time. Balancer
                  pools allow projects to release a token and build deep
                  liquidity at the same time. They apply downward price pressure
                  on the token and disincentivize front-running, speculation,
                  and whale buying.
                </p>
                <p className="text-md mx-auto ">
                  During the LBP, the price of $POP will start high to
                  disincentivize bots, front-running, and speculation, then
                  automatically decrease over time. Early investors and team
                  members that currently hold $POP have their tokens locked up
                  and will not be able to dump them during the event. You’re
                  advised to only participate in the LBP if you are familiar
                  with the risks associated with them.
                </p>
                <p className="text-md mx-auto ">
                  See Balancer’s Liquidity Bootstrapping Pool FAQ for more
                  information.
                </p>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  Why are we using an LBP?
                </p>
                <p className="text-md mx-auto ">
                  The LBP is advantageous for Popcorn because it:
                </p>
                <ul className="list-inside list-disc">
                  <li className="text-md mx-auto ">
                    Distributes governance tokens in a fair launch
                  </li>
                  <li className="text-md mx-auto ">
                    Helps prevent front-running
                  </li>
                  <li className="text-md mx-auto ">Helps prevent whales</li>
                  <li className="text-md mx-auto ">
                    Makes $POP open and accessible
                  </li>
                </ul>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  Where will the proceeds go?
                </p>
                <p className="text-md mx-auto ">
                  All proceeds will go to the Popcorn Treasury, a smart contract
                  entirely controlled by $POP token holders. Please read the{' '}
                  <a
                    href="https://popcorn.network/docs/Popcorn_whitepaper_v1.pdf"
                    className="text-md text-indigo-600"
                  >
                    White Paper
                  </a>{' '}
                  on how treasury funds are allocated via governance.
                </p>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  What if you want to be part of the community but do not have
                  the capital or technical expertise to participate in the LBP?
                </p>
                <p className="text-md mx-auto ">
                  There will be other ways to acquire $POP tokens in the near
                  future, including $POP rewards for network contributions and
                  the ability to purchase $POP on exchanges.
                </p>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  If you are going to offer liquidity mining in the future, then
                  why should I buy a token now?
                </p>
                <p className="text-md mx-auto ">
                  Participating in yield farming requires time, capital, and an
                  APY that economically justifies the amount of gas you will
                  spend in farming and harvesting your $POP rewards. The LBP
                  comparatively provides a quick and easy way for you to acquire
                  $POP and immediately become a member of the PopcornDAO.
                </p>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  What is the total supply of $POP?
                </p>
                <p className="text-md mx-auto ">
                  There is a fixed total supply of 100M $POP.
                </p>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  How many tokens are in circulation?
                </p>
                <p className="text-md mx-auto ">
                  There are 5,500,000 $POP tokens in circulation, including the
                  tokens made available in the LBP.
                </p>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  What are the specifications for the LBP?
                </p>
                <ul className="list-inside list-disc">
                  <li className="text-md mx-auto ">
                    Pool tokens: $POP and USDC
                  </li>
                  <li className="text-md mx-auto ">$POP start balance: ____</li>
                  <li className="text-md mx-auto ">USDC start balance: ____</li>
                  <li className="text-md mx-auto ">$POP start weight: _____</li>
                  <li className="text-md mx-auto ">$POP end weight: _____</li>
                  <li className="text-md mx-auto ">USDC start weight: ____</li>
                  <li className="text-md mx-auto ">USDC end weight: ____</li>
                  <li className="text-md mx-auto ">Swap fee: ______</li>
                  <li className="text-md mx-auto ">Duration: 2 days</li>
                </ul>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  What tokens does the pool accept?
                </p>
                <p className="text-md mx-auto ">
                  The pool accepts swapping $POP for any token available on
                  Balancer, however, it will be cheapest to swap $POP for USDC.
                </p>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  How was the initial price calculated?
                </p>
                <p className="text-md mx-auto ">
                  The price was calculated based on the amounts of tokens in the
                  Balancer pool and their weights:
                </p>
                <p className="text-md mx-auto ">
                  X $POP and Y USDC in weights Z : W = (X*Z)/(Y*W) = _____ USDC
                  per $POP
                </p>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  How is the last price calculated?
                </p>
                <p className="text-md mx-auto ">
                  In the scenario that there is no demand at all the last price
                  given will be:
                </p>
                <p className="text-md mx-auto ">
                  X $POP and Y USDC with weights 50 : 50 = (X*50)/(Y*50) = ____
                  USDC per $POP
                </p>

                <p className="text-md mx-auto ">
                  You can use the simulation we created with token amounts and
                  weights to predict the price as it is difficult to determine
                  the last price precisely. Thank you to the Perpetual Protocol
                  team for putting together this model!
                </p>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  Will the price weights change over time?
                </p>
                <p className="text-md mx-auto ">
                  Yes, they will start with the defined weight specification Z :
                  W and change linearly over time towards a 50%-50% split after
                  48 hours. The graph below visualizes the change:
                </p>
                <img src="images/lbpweights.png" />
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  Is there a minimum or maximum to how much I can contribute?
                </p>
                <p className="text-md mx-auto ">
                  LBPs do not have restrictions on minimum and maximum
                  contribution amounts, so you can contribute as much or as
                  little as you want.
                </p>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  If there is no maximum, can someone buy all the tokens?
                </p>
                <p className="text-md mx-auto ">
                  Yes, however it is extremely unlikely as that would spike the
                  price due to slippage and the size of the order. You can read
                  more on price impact{' '}
                  <a
                    className="text-md text-indigo-600"
                    href="https://research.paradigm.xyz/amm-price-impact"
                  >
                    here.
                  </a>
                </p>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  Who founded Popcorn?
                </p>
                <p className="text-md mx-auto ">
                  Popcorn was founded by Anthony D Martin and Michael Kisselgof
                  in January 2021.
                </p>
                <p className="text-md mx-auto ">
                  Anthony is an experienced leader in technology companies from
                  seed to public.
                </p>
                <p className="text-md mx-auto ">
                  Michael is a crypto veteran. His previous project tokenized IP
                  on Ethereum to fund biotech R&D with IKU and worked on the
                  first iterations of erc-1155.
                </p>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  Who are the early contributors to Popcorn?
                </p>
                <p className="text-md mx-auto ">
                  New Form Capital, Kinetic Capital, Sarson Funds, The Crypto
                  Founders Network, Hestia VC…..
                </p>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  How is $POP allocated?
                </p>
                <img src="images/popallocation.png" />
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  How much did Popcorn raise in previous rounds?
                </p>
                <p className="text-md mx-auto ">
                  The Private Sale and Presale raised the following:
                </p>
                <ul className="list-inside list-disc">
                  <li className="text-md mx-auto ">
                    Private Sale: $1,459,675.44
                  </li>
                  <li className="text-md mx-auto ">Pre-sale: $2,400,000</li>
                </ul>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  What is the token allocation and release schedule for
                  supporters and team?
                </p>
                <p className="text-md mx-auto ">
                  A fixed supply of 100M $POP tokens have been minted at genesis
                  and will be vested over 5 years.
                </p>
                <ul className="list-inside list-disc">
                  <li className="text-md mx-auto ">
                    $POP Ecosystem 55.2% - Offered in Liquidity Mining. See
                    Token Economics
                  </li>
                  <li className="text-md mx-auto ">
                    Early Contributors 18.8% - 1 year lock-up, 3 month vesting
                  </li>
                  <li className="text-md mx-auto ">
                    Team 12.0% - 1 year lock-up, 1 - 4 year linear vesting
                  </li>
                  <li className="text-md mx-auto ">Foundation 5.0% - N/A</li>
                  <li className="text-md mx-auto ">LBP 5.0% - No Vesting</li>
                  <li className="text-md mx-auto ">
                    Partners/Advisors 2.0% - 6 month lock-up, 10% at cliff, 1
                    year linear vesting
                  </li>
                  <li className="text-md mx-auto ">Airdrop 2.0% - Variable</li>
                  <img src="images/releaseschedule.png" />
                </ul>
              </div>

              <div className="w-full mx-auto my-10">
                <p className="font-bold text-2xl mb-3 mx-auto ">
                  Where can I read more about other Liquidity Bootstrapping
                  pools?
                </p>
                <p>
                  <a
                    href="https://medium.com/perpetual-protocol/why-we-chose-to-distribute-perp-using-a-balancer-liquidity-bootstrapping-pool-aac7f1ab6181"
                    className="text-md text-indigo-600"
                  >
                    Perpetual Protocol - Whey we chose to distribute PERP using
                    an LBP
                  </a>
                </p>
                <p>
                  <a
                    href="https://hydradx.substack.com/p/hydradx-faq"
                    className="text-md  text-indigo-600"
                  >
                    Hydradx LBP FAQ
                  </a>
                </p>
                <p>
                  <a
                    href="https://medium.com/apyfinance/apy-finances-lbp-step-by-step-guide-8a46d9ade88c"
                    className="text-md  text-indigo-600"
                  >
                    APY Finance LBP step-by-step guide
                  </a>
                </p>
                <p>
                  <a
                    href="https://medium.com/apyfinance/apy-finance-tge-on-balancers-lbp-liquidity-bootstrapping-pool-2690dd245a16"
                    className="text-md  text-indigo-600"
                  >
                    APY Finance Token Generating Event on Balancer’s LBP
                  </a>
                </p>
              </div>
            </div>
            <div className="col-span-1 flex items-stretch">
              <img className="self-end" src="images/faqpopcorn.svg"></img>
            </div>
          </div>
        </section>
        <section className="grid">
          <div className="flex flex-row mb-10 justify-self-center">
            <p className="mx-4">
              <a href="popcorn.network">popcorn.network</a>
            </p>
            <p className="mx-4">•</p>
            <p className="mx-4">
              <a href="https://discord.gg/w9zeRTSZsq">popcorn.discord</a>
            </p>
            <p className="mx-4">•</p>
            <p className="mx-4">popcorn.community</p>
            <p className="mx-4">•</p>
            <p className="mx-4">
              <a href="https://twitter.com/Popcorn_DAO">@popcorn on twitter</a>
            </p>
          </div>
        </section>
      </div>
      {/* MOBILE VERSION */}
    </div>
  );
};

export default IndexPage;