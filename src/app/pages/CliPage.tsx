import { Header } from "../components/Header";

function DivDsNote() {
  return (
    <div className="bg-[#161e28] relative shrink-0 w-full" data-name="div.ds-note">
      <div aria-hidden="true" className="absolute border-[#0f8] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[18px] pr-[16px] py-[12px] relative w-full">
        <div className="flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f8] text-[12px] w-full">
          <p className="leading-[20px]">Info: Use the same password rules as the web flow. CLI prompts mask password input.</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[386.67px]">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f8] text-[14px] tracking-[3px] uppercase whitespace-nowrap">reiven cli</p>
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#c5d0db] text-[12px] w-[min-content]">Install and use the terminal client to upload or download encrypted files.</p>
      <DivDsNote />
    </div>
  );
}

function LabelRvLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label.rv-label">
      <div className="flex flex-col font-['Consolas:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8ba0b4] text-[12px] tracking-[1px] uppercase w-full">
        <p className="leading-[18px]">install</p>
      </div>
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="relative shrink-0 w-full" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b8fa8] text-[14px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">
            # From the project root:
            <br aria-hidden="true" />
            cd reiven-cli
            <br aria-hidden="true" />
            npm install
            <br aria-hidden="true" />
            npm link
            <br aria-hidden="true" />
            <br aria-hidden="true" /># Verify command:
            <br aria-hidden="true" />
            reiven --help
          </p>
        </div>
      </div>
    </div>
  );
}

function TextareaRvTextarea() {
  return (
    <div className="bg-[#111820] h-[240px] min-h-[120px] relative rounded-[4px] shrink-0 w-full" data-name="textarea.rv-textarea">
      <div className="min-h-[inherit] overflow-auto size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[17px] py-[13px] relative size-full">
          <DivPlaceholder />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#1e2d3d] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function DivRvField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="div.rv-field">
      <LabelRvLabel />
      <TextareaRvTextarea />
    </div>
  );
}

function LabelRvLabel1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label.rv-label">
      <div className="flex flex-col font-['Consolas:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8ba0b4] text-[12px] tracking-[1px] uppercase w-full">
        <p className="leading-[18px]">upload</p>
      </div>
    </div>
  );
}

function DivPlaceholder1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b8fa8] text-[14px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">
            # Upload a file (prompts for password):
            <br aria-hidden="true" />
            reiven put secret.pdf
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            Password: *********
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            Access code: *** 80-94-86-60 ***
            <br aria-hidden="true" />
            {`Download URL: https://reiven.io/download.html?id=b05b053a745aed1dfb`}
            <br aria-hidden="true" />
            {`Delete URL: https://reiven.io/delete/b05b053a745aed1dfb/d8b97cbd72640936c9800b3289269f6f7274c7d631d7af6d`}
            <br aria-hidden="true" />
            Expires at: 2026-02-27T07:02:58.120Z
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return <div className="bg-[#0f8] h-[49px] rounded-[4px] shrink-0 w-[4px]" />;
}

function TextareaRvTextarea1() {
  return (
    <div className="bg-[#111820] h-[240px] min-h-[120px] relative rounded-[4px] shrink-0 w-full" data-name="textarea.rv-textarea">
      <div className="min-h-[inherit] overflow-auto size-full">
        <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] pl-[17px] pr-[9px] py-[13px] relative size-full">
          <DivPlaceholder1 />
          <Frame8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#1e2d3d] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function DivRvField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="div.rv-field">
      <LabelRvLabel1 />
      <TextareaRvTextarea1 />
    </div>
  );
}

function LabelRvLabel2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label.rv-label">
      <div className="flex flex-col font-['Consolas:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8ba0b4] text-[12px] tracking-[1px] uppercase w-full">
        <p className="leading-[18px]">download</p>
      </div>
    </div>
  );
}

function DivPlaceholder2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b8fa8] text-[14px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">
            # Download by access code:
            <br aria-hidden="true" />
            reiven get 80948660
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            Password: *********
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            Saved: /Users/reiven/Documents/secret.pdf
          </p>
        </div>
      </div>
    </div>
  );
}

function TextareaRvTextarea2() {
  return (
    <div className="bg-[#111820] h-[240px] min-h-[120px] relative rounded-[4px] shrink-0 w-full" data-name="textarea.rv-textarea">
      <div className="min-h-[inherit] overflow-auto size-full">
        <div className="content-stretch flex items-start min-h-[inherit] pl-[17px] pr-[9px] py-[13px] relative size-full">
          <DivPlaceholder2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#1e2d3d] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function DivRvField2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="div.rv-field">
      <LabelRvLabel2 />
      <TextareaRvTextarea2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">
      <DivRvField />
      <DivRvField1 />
      <DivRvField2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[rgba(13,17,23,0.92)] relative rounded-[6px] shrink-0 w-full" data-name="Component 16">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start justify-center p-[32px] relative w-full">
          <Frame6 />
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
        <div className="content-stretch flex flex-col items-center p-[16px] relative size-full">
          <Component />
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
      <Header />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

export default function CliPage() {
  return (
    <div className="bg-[#080c0e] content-stretch flex flex-col items-center px-[240px] relative size-full" data-name="CLI">
      <Frame />
    </div>
  );
}