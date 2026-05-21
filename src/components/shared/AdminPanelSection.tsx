import SectionContainer from "./SectionContainer.tsx";
import type { ReactNode } from "react";
import PrimaryButton from "./PrimaryButton.tsx";

type AdminPanelSectionProps = {
  children: ReactNode;
  header: string;
  topText?: string;
  sectionHeadingButtonTitle?: string;
  sectionHeadingOnClick?: () => void;
};

export default function AdminPanelSection({
  children,
  header,
  topText,
  sectionHeadingButtonTitle,
  sectionHeadingOnClick,
}: AdminPanelSectionProps) {
  return (
    <section className="w-full py-6 md:py-12">
      <SectionContainer>
        <header className="mb-8 flex flex-col lg:items-center gap-5 lg:flex-row lg:justify-between md:gap-8">
          <div>
            {topText && (
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-blue-600">
                {topText}
              </span>
            )}

            <h2 className="text-4xl font-bold leading-none tracking-tight">
              {header}
            </h2>
          </div>

          {sectionHeadingButtonTitle && sectionHeadingOnClick && (
            <PrimaryButton
              onClick={sectionHeadingOnClick}
              className="
                h-fit
                w-full
                md:w-auto
                px-6
                py-3
                text-xs
                font-bold
                uppercase
                tracking-wide
              "
            >
              {sectionHeadingButtonTitle}
            </PrimaryButton>
          )}
        </header>

        {children}
      </SectionContainer>
    </section>
  );
}
