import Image from 'next/image';

export default function w3ePartners() {
  const partners = [
    { name: 'Polygon', logo: '/landing-page/partners/polygon.svg', caseStudyUrl: '' },
    { name: 'Filecoin', logo: '/landing-page/partners/filecoin.svg', caseStudyUrl: '' },
    { name: 'Velodrome', logo: '/landing-page/partners/velodrome.svg', caseStudyUrl: '' },
    { name: 'Protocol Labs', logo: '/landing-page/partners/protocollabs.svg', caseStudyUrl: '' },
    { name: 'Berachain', logo: '/landing-page/partners/berachain.svg', caseStudyUrl: '' },
    { name: 'ENS', logo: '/landing-page/partners/ens.svg', caseStudyUrl: '' },
  ];

  return (
    <div className="bg-black text-white/80 py-24 px-4 text-center">
      <h2 className="text-lg md:text-3xl font-normal mb-16">
        Join <span className="font-bold text-white">100,000+</span> developers who rely on
        <br />
        w3e to power their apps and AI agents.
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-16 px-4 lg:px-32 justify-items-center">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center space-x-2">
            <Image src={partner.logo} alt={partner.name} width={160}height={160} />
          </div>
        ))}
      </div>
    </div>
  );
}
