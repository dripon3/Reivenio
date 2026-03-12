import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { Header } from "../components/Header";
import svgPaths from "../../imports/svg-k3f1svzhyl";

function Visibility() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="visibility">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="visibility">
          <mask height="20" id="mask0_1_1473" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_1473)">
            <path d={svgPaths.p28718c40} fill="var(--fill-0, #00FF88)" id="visibility_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowDropDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow_drop_down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow_drop_down">
          <mask height="20" id="mask0_1_1469" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_1469)">
            <path d="M10 12L6 8H14L10 12Z" fill="var(--fill-0, #00FF88)" id="arrow_drop_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Upload() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="upload">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="upload">
          <mask height="64" id="mask0_1_1465" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="64" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="64" id="Bounding box" width="64" />
          </mask>
          <g mask="url(#mask0_1_1465)">
            <path d={svgPaths.p141be800} fill="var(--fill-0, #00FF88)" id="upload_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function ShareFilePage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [profile, setProfile] = useState("Standard");
  const [allowDelete, setAllowDelete] = useState(true);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleEncryptUpload = () => {
    if (selectedFile && password.length >= 32) {
      navigate("/share/complete");
    }
  };

  return (
    <div className="bg-[#080c0e] content-stretch flex flex-col items-center px-[240px] relative size-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px relative w-[1080px]">
        <Header />
        
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
          <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative size-full">
              
              {/* Main Form Container */}
              <div className="bg-[rgba(13,17,23,0.92)] relative rounded-[6px] shrink-0 w-full">
                <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[64px] items-start justify-center p-[32px] relative w-full">
                    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full">
                      
                      {/* Left Column - Form */}
                      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[386.67px]">
                        <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f8] text-[14px] tracking-[3px] uppercase whitespace-nowrap">share</p>
                        
                        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                          
                          {/* Content Type */}
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                            <div className="flex flex-col font-['Consolas:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8ba0b4] text-[12px] tracking-[1px] uppercase w-full">
                              <p className="leading-[18px]">content type</p>
                            </div>
                            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                              <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[4px]">
                                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex items-center justify-center px-[21px] py-[9px] relative size-full">
                                    <div className="flex flex-col font-['Space_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f8] text-[12px] text-center tracking-[2px] uppercase whitespace-nowrap">
                                      <p className="leading-[normal]">file</p>
                                    </div>
                                  </div>
                                </div>
                                <div aria-hidden="true" className="absolute border border-[#0f8] border-solid inset-0 pointer-events-none rounded-[4px]" />
                              </div>
                              
                              <button
                                onClick={() => navigate("/share/note")}
                                className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[4px]"
                              >
                                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex items-center justify-center px-[21px] py-[9px] relative size-full">
                                    <div className="flex flex-col font-['Space_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c5d0db] text-[12px] text-center tracking-[2px] uppercase whitespace-nowrap">
                                      <p className="leading-[normal]">note</p>
                                    </div>
                                  </div>
                                </div>
                                <div aria-hidden="true" className="absolute border border-[#1e2d3d] border-solid inset-0 pointer-events-none rounded-[4px]" />
                              </button>
                            </div>
                          </div>

                          {/* Encryption Key */}
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

                          {/* Encryption Profile */}
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                            <div className="flex flex-col font-['Consolas:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8ba0b4] text-[12px] tracking-[1px] uppercase w-full">
                              <p className="leading-[18px]">encryption profile</p>
                            </div>
                            <div className="bg-[#111820] relative rounded-[4px] shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border border-[#1e2d3d] border-solid inset-0 pointer-events-none rounded-[4px]" />
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center justify-between pl-[16px] relative w-full">
                                  <select
                                    value={profile}
                                    onChange={(e) => setProfile(e.target.value)}
                                    className="flex-[1_0_0] bg-transparent font-['Consolas:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic outline-none relative text-[#e8edf2] text-[14px] py-[10px] pr-[8px]"
                                  >
                                    <option value="Standard">Standard</option>
                                    <option value="Paranoid">Paranoid</option>
                                  </select>
                                  <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[8px] relative shrink-0 pointer-events-none">
                                    <ArrowDropDown />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8ba0b4] text-[12px] w-full">
                              <p className="leading-[18px]">Paranoid increases Argon2 work factor and can be much slower on weak devices.</p>
                            </div>
                          </div>

                          {/* Allow Receiver to Delete Toggle */}
                          <label className="content-stretch flex gap-[12px] items-start relative shrink-0 cursor-pointer">
                            <div className="h-[22px] relative shrink-0 w-[40px]">
                              <div className={`absolute border border-solid inset-0 rounded-[999px] ${allowDelete ? 'bg-[rgba(0,255,136,0.15)] border-[#0f8] shadow-[0px_0px_12px_0px_rgba(0,255,136,0.15),0px_0px_32px_0px_rgba(0,255,136,0.15)]' : 'bg-[rgba(107,143,168,0.15)] border-[#6b8fa8]'}`}>
                                <div className={`absolute rounded-[7px] size-[14px] top-[3px] transition-all ${allowDelete ? 'bg-[#0f8] left-[21px]' : 'bg-[#6b8fa8] left-[3px]'}`} />
                              </div>
                              <input
                                type="checkbox"
                                checked={allowDelete}
                                onChange={(e) => setAllowDelete(e.target.checked)}
                                className="sr-only"
                              />
                            </div>
                            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0">
                              <div className="flex flex-col font-['Space_Mono:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#c5d0db] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                                <p className="leading-[20px]">Allow receiver to delete</p>
                              </div>
                              <div className="flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8ba0b4] text-[12px] w-[334.67px]">
                                <p className="leading-[18px]">If enabled, receiver sees a Delete File button on the download page.</p>
                              </div>
                            </div>
                          </label>

                        </div>

                        {/* Encrypt & Upload Button */}
                        <button
                          onClick={handleEncryptUpload}
                          disabled={!selectedFile || password.length < 32}
                          className="bg-[#0f8] h-[36px] relative rounded-[4px] shrink-0 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[21px] py-[9px] relative rounded-[inherit]">
                            <div className="flex flex-col font-['Space_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#080c0e] text-[12px] text-center tracking-[2px] uppercase whitespace-nowrap">
                              <p className="leading-[normal]">encrypt & upload</p>
                            </div>
                            <div className="absolute inset-[1px_109.22px_1px_-107.22px]" data-name="::after" style={{ backgroundImage: "linear-gradient(133.861deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0) 70%)" }} />
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#0f8] border-solid inset-0 pointer-events-none rounded-[4px]" />
                        </button>
                      </div>

                      {/* Right Column - File Upload */}
                      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-full items-start min-h-px min-w-px relative">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative w-full">
                            <div className="flex flex-col font-['Consolas:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8ba0b4] text-[12px] tracking-[1px] uppercase w-full">
                              <p className="leading-[18px]">Packet Notes</p>
                            </div>
                            
                            <input
                              ref={fileInputRef}
                              type="file"
                              onChange={handleFileSelect}
                              className="hidden"
                            />
                            
                            <button
                              onClick={() => fileInputRef.current?.click()}
                              className="bg-[#111820] flex-[1_0_0] min-h-[120px] min-w-px relative rounded-[4px] w-full"
                            >
                              <div className="flex flex-col items-center justify-center min-h-[inherit] overflow-auto size-full">
                                <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[inherit] px-[17px] py-[13px] relative size-full">
                                  <Upload />
                                  <div className="flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#c5d0db] text-[14px] text-center w-[min-content]">
                                    <p className="leading-[24px]">
                                      {selectedFile ? selectedFile.name : "Select a file to upload"}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div aria-hidden="true" className="absolute border border-[#1e2d3d] border-solid inset-0 pointer-events-none rounded-[4px]" />
                            </button>
                          </div>

                          <div className="bg-[#161e28] relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border-[#0f8] border-l-2 border-solid inset-0 pointer-events-none" />
                            <div className="content-stretch flex flex-col items-start pl-[18px] pr-[16px] py-[12px] relative w-full">
                              <div className="flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f8] text-[12px] w-full">
                                <p className="leading-[20px]">
                                  {selectedFile 
                                    ? `File selected: ${selectedFile.name} (${(selectedFile.size / 1024).toFixed(2)} KB)`
                                    : "No file selected"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#1e2d3d] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>

              {/* Security Profile Info */}
              <div className="relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                  <div className="relative shrink-0 w-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center justify-center relative w-full">
                      <div className="content-stretch flex items-start justify-between leading-[normal] relative shrink-0 text-[#0f8] text-[14px] tracking-[3px] uppercase w-full whitespace-nowrap">
                        <p className="font-['Space_Mono:Bold',sans-serif] not-italic relative shrink-0">Security profile: {profile}</p>
                        <p className="font-['Space_Mono:Bold','Noto_Sans:Bold',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>Baseline ready (227ms).</p>
                      </div>
                      <div className="font-['Space_Mono:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#c5d0db] text-[12px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                        <p className="mb-0">Estimated encryption time on your device: ~726ms.</p>
                        <p className="mb-0">&nbsp;</p>
                        <p className="mb-0">Encryption is done in-browser using Argon2id (PIM=100, iterations=4, memory=64MB, parallelism=1) to derive a KEK seed. A deterministic ML-KEM-768 keypair is derived from that seed, the DEK is wrapped via ML-KEM shared secret, and file payload uses AES-256-GCM with a random 256-bit DEK.</p>
                        <p className="mb-0">&nbsp;</p>
                        <p>Brute-force baseline (AMD Threadripper PRO 9995WX (96 cores)): enter a password to estimate crack time. Model anchored to fixed Argon2id benchmark assumptions for this hardware class (tuned constant, not local calibration).</p>
                      </div>
                    </div>
                  </div>
                </div>
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
