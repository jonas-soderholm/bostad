export default function AboutPage() {
  return (
    <main className="w-full md:mt-40 mt-10 mb-60 bg-slate-200 flex items-center justify-center px-8">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left">
        {/* IMAGE */}
        <img
          src="/images/jonas-soderholm-foto.jpg"
          alt="Jonas Söderholm"
          className="w-64 h-64 object-cover rounded-xl shadow-md md:w-80 md:h-80"
        />

        {/* TEXT */}
        <div className="max-w-2xl">
          <h1 className="text-5xl font-light mb-8">Om Jonas Söderholm</h1>

          <p className="text-xl text-gray-700 leading-relaxed font-light">
            Hej! Jag en är bostadsfotograf i Stockholm med ett stort intresse
            för estetik och vackra hem. Mitt fokus är rena och naturliga bilder
            som lyfter fram rymd, ljus och känsla. Jag arbetar noggrant och
            stilrent för att få varje hem att se som bäst ut, både i foto och
            video.
          </p>
        </div>
      </div>
    </main>
  );
}
