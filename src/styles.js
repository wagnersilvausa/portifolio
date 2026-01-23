'use client';

const styles = {
  // ✅ Mobile-first: mais confortável no celular, mantém igual no desktop
  // - px-4 no mobile (melhor que px-6 em telas 360/390)
  // - sm sobe para px-10, md px-12, lg px-16 (fica mais “premium”)
  paddingX: "px-4 sm:px-10 md:px-12 lg:px-16",
  paddingY: "py-10 sm:py-14 md:py-16",
  padding: "px-4 sm:px-10 md:px-12 lg:px-16 py-10 sm:py-14 md:py-16",

  // ✅ Hero: evita quebra feia no mobile, melhora line-height
  heroHeadText:
    "font-black text-white text-[36px] xs:text-[44px] sm:text-[56px] lg:text-[80px] leading-[1.05] sm:leading-[1.05] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium text-[15px] xs:text-[18px] sm:text-[22px] lg:text-[30px] leading-[1.45] sm:leading-[1.5] lg:leading-[40px]",

  // ✅ Títulos de seção: mobile mais limpo, desktop continua forte
  sectionHeadText:
    "text-white font-black text-[28px] xs:text-[34px] sm:text-[44px] md:text-[56px] leading-[1.1]",
  sectionSubText:
    "text-secondary uppercase tracking-wider text-[12px] xs:text-[13px] sm:text-[15px]",
};

export { styles };
