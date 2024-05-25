import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import ShimmerButton from "../magicui/ShimmerButton";

export const CustomButton = () => {
  return (
    <section className="flex items-center gap-[0.62rem] justify-end w-full">
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <ShimmerButton
                      onClick={openConnectModal}
                      shimmerColor="#75f07f"
                      shimmerSize="0.1em"
                      shimmerDuration="2s"
                      borderRadius="100px"
                      background="rgba(0, 0, 0, 1)"
                      className="rounded-[3.125rem] w-[200px] h-10"
                    >
                      <span className="text-[#75f07f] font-semibold">
                        Connect
                      </span>
                    </ShimmerButton>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <ShimmerButton
                      onClick={openChainModal}
                      shimmerColor="#EE4E4E"
                      shimmerSize="0.1em"
                      shimmerDuration="2s"
                      borderRadius="100px"
                      background="rgba(0, 0, 0, 1)"
                      className="rounded-[3.125rem] w-[200px] h-10"
                    >
                      <span className="text-[#EE4E4E] font-semibold">
                        Wrong Network
                      </span>
                    </ShimmerButton>
                  );
                }

                return (
                  <div style={{ display: "flex", gap: 12 }}>
                    {/* <ShimmerButton
                      onClick={openChainModal}
                      shimmerColor="#75f07f"
                      shimmerSize="0.1em"
                      shimmerDuration="2s"
                      borderRadius="100px"
                      background="rgba(0, 0, 0, 0.6)"
                      className="rounded-[3.125rem] w-[200px] h-10"
                    >
                      {chain.hasIcon && (
                        <div
                          className="w-auto h-auto xl:w-7 xl:h-7"
                          style={{
                            background: chain.iconBackground,
                            borderRadius: 999,
                            overflow: "hidden",
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <Image
                              alt={chain.name ?? "Chain icon"}
                              height={28}
                              width={28}
                              src={chain.iconUrl}
                              className="w-auto h-auto xl:w-7 xl:h-7"
                            />
                          )}
                        </div>
                      )}
                      <span className="text-[#75f07f]">{chain.name}</span>
                    </ShimmerButton> */}

                    <ShimmerButton
                      onClick={openAccountModal}
                      shimmerColor="#75f07f"
                      shimmerSize="0.1em"
                      shimmerDuration="2s"
                      borderRadius="100px"
                      background="rgba(0, 0, 0, 0.95)"
                      className="rounded-[3.125rem] w-[200px] h-10"
                    >
                      <span className="text-[#75f07f]">
                        {account.displayName}
                      </span>
                    </ShimmerButton>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </section>
  );
};
