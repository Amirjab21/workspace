import Link from 'next/link';

export default function Desktop(): JSX.Element {
  return (
    <div className="hidden xl:flex 2xl:hidden flex-col w-full h-full font-landing">
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
                    <div className="space-x-8 relative z-20">
                      <Link href="/guide" passHref>
                        <a
                          className="font-light text-xl cursor-pointer hover:text-blue-600"
                          target="_window"
                        >
                          Step-by-Step Guide
                        </a>
                      </Link>
                      <Link href="/faq" passHref>
                        <a
                          className="font-light text-xl cursor-pointer hover:text-blue-600"
                          target="_window"
                        >
                          Liquidity Bootstrapping FAQ
                        </a>
                      </Link>
                    </div>
                  </nav>
                </header>
                <div className="h-60" style={{backgroundColor: '#FDEAA7'}}></div>
                <img
                  className="w-full object-cover z-0 "
                  src="images/bgLandingPageUpper.svg"
                  alt="Upper background"
                />
                <img
                  className="absolute top-12 -left-8 w-3/4 z-10"
                  src="images/rocket.svg"
                  alt="Cat riding a rocket with orange shooting stars"
                />
                <div className="absolute mx-auto flex flex-col justify-between -bottom-0 items-center z-20">
                  <div>
                    <h1 className="text-center text-7xl font-light leading-snug font-landing">
                      POPCORN
                    </h1>
                    <h1 className="text-center font-light text-6xl leading-snug mb-2 font-landing">
                      Liquidity Bootstrapping Event
                    </h1>
                    <p className="w-1/2 mx-auto text-center text-xl leading-8 font-landing font-light mt-6">
                      The Popcorn LBP Event is a two-day liquidity bootstrapping
                      event for the Popcorn community. This is the first
                      opportunity for the general public to buy POP to
                      participate in the governance of the network. All proceeds
                      will go to the Popcorn Treasury, a smart contract entirely
                      controlled by Popcorn token holders. Please refer to this
                      Step-by-Step Guide on how to safely participate in the LBP
                      and check out the FAQ for more on how LBPs work.
                    </p>
                    <form
                      action="https://network.us1.list-manage.com/subscribe/post?u=5ce5e82d673fd2cfaf12849a5&amp;id=e85a091ed3"
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      className="validate"
                      target="_blank"
                      noValidate
                    >
                      <div
                        id="mc_embed_signup_scroll"
                        className=" mx-auto shadow-xl bg-white rounded-xl mt-24 py-4 px-4 w-3/12 flex flex-row items-center justify-between"
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
                  className="absolute -bottom-40 right-0 w-3/12 z-50"
                  src="images/jumpingCat.svg"
                  alt="Jumping Cat"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="w-9/12 mx-auto flex flex-row justify-between items-center mt-48">
            <div className="w-full pt-12 grid grid-cols-2 ">
              <div className="mr-8">
                <p className="font-medium text-4xl mb-6">What is Popcorn?</p>
                <p className="text-xl leading-8 font-light">
                  Popcorn is the first open-source, community-led, and
                  self-sustaining network for software collaboration. With
                  Ethereum, Popcorn is harnessing the power of Ethereum and DeFi
                  in order to enable developers to truly own their collaboration
                  infrastructure. The network’s code and treasury of assets are
                  publicly managed fully in the open allowing any developer to
                  contribute and influence the direction of the project.
                </p>
              </div>
              <div className="ml-8">
                <p className="font-medium text-4xl mb-6">The POP Token</p>
                <p className="text-xl leading-8 font-light">
                  The POP token (POP) is designed as a governance token that
                  enables a number of Ethereum-based features as well as the
                  communal ownership, collective governance, and long-term
                  sustainability of the Popcorn network. Its holders govern
                  Popcorn’s Ethereum integration, a smart contract system that
                  enables unique global names, decentralized organizations, and
                  experiences that help maintainers sustain their open-source
                  work. Read more about the POP token and Ethereum integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="relative">
            <img
              src="images/bgLBPIndexLower.svg"
              className="absolute w-full -top-72 pt-18 z-0"
            ></img>
            <div className="absolute w-full mt-52">
              <div className="mx-auto w-full">
                <p className="font-medium text-4xl mb-6 text-center ">
                  How to participate?
                </p>
                <p className="w-6/12 mx-auto text-center text-xl leading-8 font-light mt-6">
                  The Popcorn network will offer 3.75m POP tokens over 48 hours,
                  from 25.2.2021 ~16:30 UTC till 27.2.2021 ~16:30pm UTC. This
                  supply will be available on a POP/USDC Balancer Liquidity
                  Bootstrapping Pool. All proceeds will go to the Popcorn
                  Treasury, a smart contract entirely controlled by Popcorn
                  token holders
                </p>
              </div>
              <div className="bg-gray-100 rounded-2xl flex flex-row w-10/12 mx-auto pt-14 mt-24 px-4">
                <div className="w-2/12 relative">
                  <img
                    src="/images/blueCat.png"
                    alt="blueCat"
                    className="absolute bottom-0 left-2"
                  />
                </div>
                <div className="flex flex-col w-8/12">
                  <img
                    src="/images/quotationMark.png"
                    alt="quote"
                    className="w-18 h-12 mb-6"
                  />
                  <p className="text-xl font-medium leading-8 mb-18">
                    The Balancer LBP is not like a regular Balancer pool. The
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
                    className="absolute bottom-0 right-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid z-10 mt-128 pt-40">
          <div className="flex flex-row mb-10 justify-self-center pt-40 mt-114">
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