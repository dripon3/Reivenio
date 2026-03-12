import svgPaths from "./svg-k9m47puj8a";

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Component 1">
        <div className="flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b8fa8] text-[12px] tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[18px]">SHARE</p>
        </div>
        <div className="absolute bg-[#6b8fa8] bottom-[-1px] h-px left-[12px] right-[12px] shadow-[0px_0px_12px_0px_rgba(0,255,136,0.15),0px_0px_32px_0px_rgba(0,255,136,0.15)]" data-name="::after" />
      </div>
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Component 1">
        <div className="flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f8] text-[12px] tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[18px]">DOWNLOAD</p>
        </div>
        <div className="absolute bg-[#0f8] bottom-[-1px] h-px left-[12px] right-[12px] shadow-[0px_0px_12px_0px_rgba(0,255,136,0.15),0px_0px_32px_0px_rgba(0,255,136,0.15)]" data-name="::after" />
      </div>
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Component 3">
        <div className="flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b8fa8] text-[12px] tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[18px]">cli</p>
        </div>
        <div className="absolute bg-[#6b8fa8] bottom-[-1px] h-px left-[12px] right-[12px] shadow-[0px_0px_12px_0px_rgba(0,255,136,0.15),0px_0px_32px_0px_rgba(0,255,136,0.15)]" data-name="::after" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[16px] pr-[166px] py-[16px] relative w-full">
          <p className="font-['Space_Mono:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f8] text-[24px] w-[140px]">reiven.io</p>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f8] text-[14px] tracking-[3px] uppercase whitespace-nowrap">DOWNLOAD</p>
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#c5d0db] text-[12px] w-[min-content]">File ID: 9bb9642046471ce8fb | Size: 793235 bytes | Expires: 3/7/2026, 7:45:51 PM</p>
    </div>
  );
}

function LabelRvLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label.rv-label">
      <div className="flex flex-col font-['Consolas:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8ba0b4] text-[12px] tracking-[1px] uppercase w-full">
        <p className="leading-[18px]">password</p>
      </div>
    </div>
  );
}

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

function ImageFill() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[8px] relative shrink-0" data-name="image fill">
      <Visibility />
    </div>
  );
}

function SelectRvSelect() {
  return (
    <div className="bg-[#111820] relative rounded-[4px] shrink-0 w-full" data-name="select.rv-select">
      <div aria-hidden="true" className="absolute border border-[#1e2d3d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6b8fa8] text-[14px]">
            <p className="leading-[normal]">••••••••••••</p>
          </div>
          <ImageFill />
        </div>
      </div>
    </div>
  );
}

function DivRvField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="div.rv-field">
      <LabelRvLabel />
      <SelectRvSelect />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 8">
        <div className="flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8ba0b4] text-[12px] w-full">
          <p className="leading-[18px]">Enter the 8-digit code (dashes optional)</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DivRvField />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame6 />
      <div className="bg-[#0f8] h-[36px] relative rounded-[4px] shrink-0" data-name="Component 9">
        <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[21px] py-[9px] relative rounded-[inherit]">
          <div className="flex flex-col font-['Space_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#080c0e] text-[12px] text-center tracking-[2px] uppercase whitespace-nowrap">
            <p className="leading-[normal]">{`download & decrypt`}</p>
          </div>
          <div className="absolute inset-[1px_109.22px_1px_-107.22px]" data-name="::after" style={{ backgroundImage: "linear-gradient(133.861deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0) 70%)" }} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#0f8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[rgba(13,17,23,0.92)] relative rounded-[6px] shrink-0 w-full" data-name="Component 16">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start justify-center p-[32px] relative w-full">
          <Frame5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#1e2d3d] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[rgba(13,17,23,0.92)] relative rounded-[6px] shrink-0 w-full" data-name="Component 17">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start justify-center p-[32px] relative w-full">
          <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f8] text-[14px] tracking-[3px] uppercase whitespace-nowrap">Decrypted download started.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#1e2d3d] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative size-full">
          <Component />
          <Component1 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#00994d] text-[10px] tracking-[2px] uppercase whitespace-nowrap">Server sees only ciphertext · AES-256-GCM + PBKDF2 · No accounts · Zero retention</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-[1080px]">
      <Frame1 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

export default function DownloadEnteringPassword() {
  return (
    <div className="bg-[#080c0e] content-stretch flex flex-col items-center px-[240px] relative size-full" data-name="DOWNLOAD - entering password">
      <Frame />
    </div>
  );
}