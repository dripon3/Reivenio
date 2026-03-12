import { useState } from "react";
import { useNavigate } from "react-router";
import { Header } from "../components/Header";

export default function DownloadPage() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const handleDownload = () => {
    if (code.trim()) {
      navigate(`/download/${code.trim()}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleDownload();
    }
  };

  return (
    <div className="bg-[#080c0e] content-stretch flex flex-col items-center px-[240px] relative size-full" data-name="DOWNLOAD">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1080px]">
        <Header />
        
        <div className="relative shrink-0 w-full">
          <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
              <div className="bg-[rgba(13,17,23,0.92)] relative rounded-[6px] shrink-0 w-full">
                <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[64px] items-start justify-center p-[32px] relative w-full">
                    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f8] text-[14px] tracking-[3px] uppercase whitespace-nowrap">download</p>
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <div className="flex flex-col font-['Consolas:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8ba0b4] text-[12px] tracking-[1px] uppercase w-full">
                            <p className="leading-[18px]">code</p>
                          </div>
                          <div className="bg-[#111820] relative rounded-[4px] shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border border-[#1e2d3d] border-solid inset-0 pointer-events-none rounded-[4px]" />
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex items-center px-[16px] py-[10px] relative w-full">
                                <input
                                  type="text"
                                  value={code}
                                  onChange={(e) => setCode(e.target.value)}
                                  onKeyPress={handleKeyPress}
                                  placeholder="60-23-37-63"
                                  className="flex-[1_0_0] bg-transparent font-['Consolas:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic outline-none relative text-[#e8edf2] text-[14px] placeholder:text-[#6b8fa8]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={handleDownload}
                          disabled={!code.trim()}
                          className="bg-[#0f8] h-[36px] relative rounded-[4px] shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[21px] py-[9px] relative rounded-[inherit]">
                            <div className="flex flex-col font-['Space_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#080c0e] text-[12px] text-center tracking-[2px] uppercase whitespace-nowrap">
                              <p className="leading-[normal]">next</p>
                            </div>
                            <div className="absolute inset-[1px_109.22px_1px_-107.22px]" data-name="::after" style={{ backgroundImage: "linear-gradient(133.861deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0) 70%)" }} />
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#0f8] border-solid inset-0 pointer-events-none rounded-[4px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#1e2d3d] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>
            </div>
          </div>
        </div>
        
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
