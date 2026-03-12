import { useState } from "react";
import { Header } from "../components/Header";

export default function UploadCompletePage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const code = "60-23-37-63";
  const downloadUrl = "https://reiven.io/download.html?id=2483989s678ds679fs9";
  const deleteUrl = "https://reiven.io/delete/8370490d89as6798a6dc7s89c789cs98c6s9c86c789s6c9a86c9as8c6a98CC8SC8S68BG89J";

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const CopyButton = ({ onClick, field }: { onClick: () => void; field: string }) => (
    <button
      onClick={onClick}
      className="bg-[#0f8] h-[36px] relative rounded-[4px] shrink-0"
    >
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[21px] py-[9px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Space_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#080c0e] text-[12px] text-center tracking-[2px] uppercase whitespace-nowrap">
          <p className="leading-[normal]">{copiedField === field ? "copied!" : "copy"}</p>
        </div>
        <div className="absolute inset-[1px_109.22px_1px_-107.22px]" data-name="::after" style={{ backgroundImage: "linear-gradient(133.861deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0) 70%)" }} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0f8] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </button>
  );

  return (
    <div className="bg-[#080c0e] content-stretch flex flex-col items-center px-[240px] relative size-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-[1080px]">
        <Header />
        
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
          <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative size-full">
              
              {/* Upload Complete Message */}
              <div className="bg-[rgba(13,17,23,0.92)] relative rounded-[6px] shrink-0 w-full">
                <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start justify-center not-italic p-[32px] relative w-full">
                    <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f8] text-[14px] tracking-[3px] uppercase whitespace-nowrap">upload complete.</p>
                    <p className="font-['Space_Mono:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#c5d0db] text-[12px] w-[min-content]">Expires at 3/7/2026, 7:45:51 PM.</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#1e2d3d] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>

              {/* Share Details */}
              <div className="bg-[rgba(13,17,23,0.92)] relative rounded-[6px] shrink-0 w-full">
                <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[64px] items-start justify-center p-[32px] relative w-full">
                    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f8] text-[14px] tracking-[3px] uppercase whitespace-nowrap">share details</p>
                      
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                        
                        {/* Code */}
                        <div className="bg-[#161e28] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#0f8] border-l-2 border-solid inset-0 pointer-events-none" />
                          <div className="content-stretch flex flex-col items-start pl-[18px] pr-[16px] py-[12px] relative w-full">
                            <div className="relative shrink-0 w-full">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative w-full">
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px not-italic relative text-[12px]">
                                  <div className="flex flex-col font-['Consolas:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#8ba0b4] tracking-[1px] uppercase w-full">
                                    <p className="leading-[18px]">code</p>
                                  </div>
                                  <p className="font-['Space_Mono:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#c5d0db] w-full">{code}</p>
                                </div>
                                <CopyButton onClick={() => copyToClipboard(code, "code")} field="code" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Download URL */}
                        <div className="bg-[#161e28] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#0f8] border-l-2 border-solid inset-0 pointer-events-none" />
                          <div className="content-stretch flex flex-col items-start pl-[18px] pr-[16px] py-[12px] relative w-full">
                            <div className="relative shrink-0 w-full">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative w-full">
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px not-italic relative text-[12px]">
                                  <div className="flex flex-col font-['Consolas:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#8ba0b4] tracking-[1px] uppercase w-full">
                                    <p className="leading-[18px]">download</p>
                                  </div>
                                  <p className="decoration-solid font-['Space_Mono:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#0f8] underline w-full break-all">{downloadUrl}</p>
                                </div>
                                <CopyButton onClick={() => copyToClipboard(downloadUrl, "download")} field="download" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Delete URL */}
                        <div className="bg-[#161e28] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#0f8] border-l-2 border-solid inset-0 pointer-events-none" />
                          <div className="content-stretch flex flex-col items-start pl-[18px] pr-[16px] py-[12px] relative w-full">
                            <div className="relative shrink-0 w-full">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative w-full">
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px not-italic relative text-[12px]">
                                  <div className="flex flex-col font-['Consolas:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#8ba0b4] tracking-[1px] uppercase w-full">
                                    <p className="leading-[18px]">delete</p>
                                  </div>
                                  <p className="decoration-solid font-['Space_Mono:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#0f8] underline w-full break-all">{deleteUrl}</p>
                                </div>
                                <CopyButton onClick={() => copyToClipboard(deleteUrl, "delete")} field="delete" />
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                      <p className="font-['Space_Mono:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#c5d0db] text-[12px] w-[min-content]">Share the download URL/code and password separately.</p>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#1e2d3d] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>

            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
              <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#00994d] text-[10px] tracking-[2px] uppercase whitespace-nowrap">Server sees only ciphertext · AES-256-GCM + PBKDF2 · No accounts · Zero retention</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
