import Link from 'next/link';

export default function Tablet(): JSX.Element {
  const startDate = new Date(1638172800000).toLocaleDateString(undefined, {
    timeZone: 'UTC',
  });
  const startTime = new Date(1638172800000).toLocaleTimeString(undefined, {
    timeZone: 'UTC',
  });
  const endDate = new Date(1638172800000 + 216000000).toLocaleDateString(
    undefined,
    { timeZone: 'UTC' },
  );
  const endTime = new Date(1638172800000 + 216000000).toLocaleTimeString(
    undefined,
    { timeZone: 'UTC' },
  );
  return (
    <div className="hidden md:flex lg:flex xl:hidden 2xl:hidden flex-col w-full h-full font-landing">
      <div className="flex flex-col w-full h-full">
        <section className="-mt-1">
          <div className="w-full">
            <div className="">
              <div className="relative">
                <header className="w-full bg-primary pt-12">
                  <nav className="w-9/12 mx-auto pb-4 flex flex-row items-center justify-between">
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
            <div className="space-x-8  relative z-20">
              <Link href="/guide" passHref>
                <a
                  className="font-light text-normal cursor-pointer hover:text-blue-600"
                  target="_window"
                >
                  Step-by-Step Guide
                </a>
              </Link>
              <Link href="/faq" passHref>
                <a
                  className="font-light text-normal cursor-pointer hover:text-blue-600"
                  target="_window"
                >
                  Liquidity Bootstrapping FAQ
                </a>
              </Link>
              <Link
                href="https://medium.com/popcorndao/pop-token-economics-5a580f0bf712"
                passHref
              >
                <a
                  className="font-light text-normal cursor-pointer hover:text-blue-600"
                  target="_window"
                >
                  Tokenomics
                </a>
              </Link>
                    </div>
                  </nav>
                </header>
                <div className="h-60" style={{backgroundColor: '#FDEAA7'}}></div>
                <img
                  className="w-full object-cover z-0"
                  src="images/bgLandingPageUpper.svg"
                  alt="Upper background"
                />
                <img
                  className="absolute top-8 -left-8 w-3/4 z-10"
                  src="images/rocket.svg"
                  alt="Cat riding a rocket with orange shooting stars"
                />
                <div className="absolute mx-auto flex flex-col justify-between top-80 items-center mt-20 z-20">
                  <div>
                    <h1 className="text-center font-light text-3xl leading-snug mb-2 font-landing">
                     <span translate="no">Popcorn's</span>{" "} Fair Launch Auction
                    </h1>
                    <p className="w-1/2 mx-auto text-center text-normal font-landing font-light mt-6">
                    The <span translate="no">Popcorn</span>{" "} Fair Launch Auction (FLA) will be the first opportunity for the
                    general public to join the PopcornDAO by acquiring the POP
                    token. This is a 2.5 day, multi-chain event for the <span translate="no">Popcorn</span>{" "}
                    community where all proceeds raised will go to the <span translate="no">Popcorn</span>{" "}
                    Treasury, a smart contract entirely controlled by POP token
                    holders. Please refer to this{' '}
                    <Link href="#">
                      <a className="text-blue-600 hover:text-blue-700 underline">
                        Step-by-Step Guide
                      </a>
                    </Link>{' '}
                    on how to safely participate in the FLA and{' '}
                    <Link href="/faq">
                      <a className="text-blue-600 hover:text-blue-700 underline">
                        check out the FAQ
                      </a>
                    </Link>{' '}
                    for more on how the auction works.
                    </p>
                    <form
                      action="https://network.us1.list-manage.com/subscribe/post?u=5ce5e82d673fd2cfaf12849a5&amp;id=e85a091ed3"
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      className="validate "
                      target="_blank"
                      noValidate
                    >
                      <div
                        id="mc_embed_signup_scroll"
                        className="mx-auto shadow-xl bg-white rounded-xl mt-6 py-2 px-2 w-4/12 flex flex-row items-center justify-between"
                      >
                        <input
                          type="email"
                          name="EMAIL"
                          className="w-10/12 p-2 text-base mx-4 text-gray-900"
                          id="mce-EMAIL"
                          placeholder="Email Address"
                          required
                        />
                        <div
                          style={{ position: 'absolute', left: '-5000px' }}
                          aria-hidden="true"
                        >
                          <input
                            type="text"
                            name="b_5ce5e82d673fd2cfaf12849a5_e85a091ed3"
                            tabIndex={-1}
                          />
                        </div>
                        <div className="clear">
                          <input
                            type="submit"
                            value="Early Access"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="font-medium text-base bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-4 py-2 cursor-pointer"
                            readOnly
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <img
                  className="absolute -bottom-20 right-0 w-3/12 z-50"
                  src="images/jumpingCat.svg"
                  alt="Jumping Cat"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="w-9/12 mx-auto flex flex-row justify-between items-center mt-44">
            <div className="w-full pt-12 grid grid-cols-2 ">
              <div className="mr-8">
                <p className="font-bold text-2xl mb-1">What is <span translate="no">Popcorn</span>?{" "}</p>
                <p className="text-lg leading-2 mt-4 font-light">
                <span translate="no">Popcorn</span>{" "} is aiding a revolutionary shift in global systems
                  through accessible DeFi products that align financial
                  wellbeing with positive global impact.
                </p>
                <p className="text-lg leading-2 mt-4 font-light">
                In the next months, the roadmap offers multi-chain curated
                  pools of strategies and DeFi products (on Ethereum, Arbitrum,
                  Polygon, Fantom, Avalanche, Solana). These products generate
                  high yield while also funding community selected social impact
                  and non-profit organizations without any extra costs to the
                  end user.
                </p>
                <p className="text-lg leading-2 mt-4 font-light">
                In 2022, the roadmap includes launching DeFi primitives such
                  as a lending protocol that produces a native decentralized
                  stablecoin which has the extraordinary characteristic of
                  creating impact on a community-wide and global level. How?
                  Just holding it supports non-profits and public goods; that’s
                  something that can’t be said of the dollar or any stablecoin
                  in existence.
                </p>
      
              </div>
              <div className="ml-8">
                <p className="font-bold text-2xl mb-1">The POP Token</p>
                <p className="text-lg leading-2 mt-4 font-light">
                PopcornDAO is a decentralized autonomous organization of
                  members holding the <span translate="no">Popcorn</span>{" "} governance token POP.
                </p>
                <p className="text-lg leading-2 mt-4 font-light">
                Token holders are eligible to participate in the network by
                  running keeper nodes and voting on proposals that influence
                  the parameters of Popcorn’s smart contracts. Yield farming and
                  staking incentives are also made available to token holders to
                  further increase their yield.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="relative">
            <img
              src="images/bgLBPIndexLower.svg"
              className="absolute w-full -top-28 z-0"
            ></img>
            <div className="absolute w-full mt-52">
              <div className="mx-auto w-full">
                <p className="font-bold text-2xl text-center mb-2">
                  Fair Launch Auction Details
                </p>
                <div className="w-6/12 mx-auto text-center text-lg leading-2 font-light">
                  <p className="text-md ">
                    <span className="font-bold">POP Tokens Offered</span>{" "}:
                    3,750,000
                  </p>
                  <p className="text-md ">
                    <span className="font-bold">When?</span>{" "} {startDate} ~
                    {startTime} UTC until {endDate} ~{endTime} UTC
                  </p>
                  <p className="text-md">
                    <span className="font-bold">Where?</span>{" "} POP/USDC{' '}
                    <Link href="https://docs.alchemist.wtf/copper/fair-launch-auctions/what-is-a-fair-launch-auction" passHref>
                      <a  className="text-blue-600 hover:text-blue-700 underline">Copper Fair Launch Auction Pool</a>
                    </Link>
                  </p>
                  <p className="text-md ">
                    <span className="font-bold">Networks supported?</span>{" "}{' '}
                    Ethereum, Polygon &amp; Arbitrum
                  </p>
                  <p className="text-md ">
                    For more information please{' '}
                    <Link href="/faq" passHref>
                      <a className="text-blue-600 hover:text-blue-700 underline">
                        see the FAQ
                      </a>
                    </Link>{' '}
                    and the{' '}
                    <Link href="#" passHref>
                      <a className="text-blue-600 hover:text-blue-700 underline">
                        Step-by-Step Guide
                      </a>
                    </Link>{' '}
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl flex flex-row w-8/12 mx-auto pt-8 mt-28 px-4 mb-20">
                <div className="w-2/12 relative">
                  <img
                    src="/images/blueCat.png"
                    alt="blueCat"
                    className="absolute bottom-0 left-0"
                  />
                </div>
                <div className="flex flex-col w-9/12">
                  <img
                    src="/images/quotationMark.png"
                    alt="quote"
                    className="w-14 h-10 mb-2"
                  />
                  <p className="text-lg font-medium leading-2 mb-18">
                  A Fair Launch Auction is not like a regular decentralized exchange pool. The
                    price will start high to disincentivize bots, front-running
                    and speculation. Over time, downwards price pressure will be
                    created by the change of relative weights between the two
                    assets. Only participate if you know what you are doing.
                  </p>
                </div>
                <div className="w-2/12 relative">
                  <img
                    src="/images/orangeCat.png"
                    alt="orangeCat"
                    className="absolute bottom-0 right-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid z-10 mt-128">
          <div className="flex flex-row mb-10 justify-self-center pt-40 mt-10">
            <p className="mx-4">
              <a href="https://popcorn.network" target="_blank">
                popcorn.network
              </a>
            </p>
            <p className="mx-4">•</p>
            <p className="mx-4">
              <a href="https://discord.gg/w9zeRTSZsq" target="_blank">
                popcorn.discord
              </a>
            </p>
            <p className="mx-4">•</p>
            <p className="mx-4">popcorn.community</p>
            <p className="mx-4">•</p>
            <p className="mx-4">
              <a href="https://twitter.com/Popcorn_DAO" target="_blank">
                @popcorn on twitter
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}