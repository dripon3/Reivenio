import { useState } from "react";
import { useParams } from "react-router";
import { Header } from "../components/Header";
import svgPaths from "../../imports/svg-k9m47puj8a";

function Visibility() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="visibility">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="visibility">
          <mask height="20" id="mask0_1_1488" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_1488)">
            <path d={svgPaths.p28718c40} fill="var(--fill-0, #00FF88)" id="visibility_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Download() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="download">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="download">
          <mask height="64" id="mask0_1_1503" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="64" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="64" id="Bounding box" width="64" />
          </mask>
          <g mask="url(#mask0_1_1503)">
            <path d={svgPaths.p141be800} fill="var(--fill-0, #00FF88)" id="download_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function DownloadPasswordPage() {
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isDecrypting, setIsDecrypting] = useState(false);

  const handleDecryptDownload = () => {
    if (password.length >= 32) {
      setIsDecrypting(true);
      // Simulate decryption process
      setTimeout(() => {
        setIsDecrypting(false);
        // Here you would trigger the actual download
        alert("Download started!");
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleDecryptDownload();
    }
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this file? This action cannot be undone.")) {
      alert("File deleted successfully!");
    }
  };

  return (
    <div className="bg-[#080c0e] content-stretch flex flex-col items-center px-[240px] relative size-full" data-name="DOWNLOAD ENTERING PASSWORD">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-[1080px]">
        <Header />
        
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
          <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative size-full">
              <div className="bg-[rgba(13,17,23,0.92)] relative rounded-[6px] shrink-0 w-full">
                <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[64px] items-start justify-center p-[32px] relative w-full">
                    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full">
                      
                      {/* Left Column - Form */}
                      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[386.67px]">
                        <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f8] text-[14px] tracking-[3px] uppercase whitespace-nowrap">download</p>
                        
                        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                            <div className="flex flex-col font-['Consolas:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8ba0b4] text-[12px] tracking-[1px] uppercase w-full">
                              <p className="leading-[18px]">Encryption Key</p>
                            </div>
                            <div className="bg-[#111820] relative rounded-[4px] shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border border-[#1e2d3d] border-solid inset-0 pointer-events-none rounded-[4px]" />
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center justify-between pl-[16px] relative w-full">
                                  <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="••••••••••••"
                                    className="flex-[1_0_0] bg-transparent font-['Consolas:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic outline-none relative text-[#6b8fa8] text-[14px] py-[10px]"
                                  />
                                  <button
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="content-stretch flex flex-col items-start justify-center overflow-clip p-[8px] relative shrink-0"
                                  >
                                    <Visibility />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8ba0b4] text-[12px] w-full">
                              <p className="leading-[18px]">Min 32 chars.</p>
                            </div>
                          </div>
                          
                          <button
                            onClick={handleDecryptDownload}
                            disabled={password.length < 32 || isDecrypting}
                            className="bg-[#0f8] h-[36px] relative rounded-[4px] shrink-0 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[21px] py-[9px] relative rounded-[inherit]">
                              <div className="flex flex-col font-['Space_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#080c0e] text-[12px] text-center tracking-[2px] uppercase whitespace-nowrap">
                                <p className="leading-[normal]">{isDecrypting ? "decrypting..." : "decrypt & download"}</p>
                              </div>
                              <div className="absolute inset-[1px_109.22px_1px_-107.22px]" data-name="::after" style={{ backgroundImage: "linear-gradient(133.861deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0) 70%)" }} />
                            </div>
                            <div aria-hidden="true" className="absolute border border-[#0f8] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          </button>
                          
                          <button
                            onClick={handleDelete}
                            className="h-[36px] relative rounded-[4px] shrink-0 w-full"
                          >
                            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex items-center justify-center px-[21px] py-[9px] relative size-full">
                                <div className="flex flex-col font-['Space_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c5d0db] text-[12px] text-center tracking-[2px] uppercase whitespace-nowrap">
                                  <p className="leading-[normal]">delete file</p>
                                </div>
                              </div>
                            </div>
                            <div aria-hidden="true" className="absolute border border-[#1e2d3d] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          </button>
                        </div>
                      </div>

                      {/* Right Column - Download Icon */}
                      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center justify-center min-h-px min-w-px relative self-stretch">
                          <Download />
                          <div className="flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c5d0db] text-[14px] text-center whitespace-nowrap">
                            <p className="leading-[24px]">Ready to decrypt</p>
                          </div>
                        </div>
                      </div>

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
