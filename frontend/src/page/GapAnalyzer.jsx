import CareerProgress from "../component/careerProgress"


const GapAnalyzer = () => {
    const teamMembers = [
        {
          name: 'Michelle B.',
          role: 'Unlock Your Engineering Career | Senior Software Engineer 15+ | FAANG',
          image: 'https://leland.imgix.net/profile-photos/66fee16a0bf02f035056825c.jpeg?fit=crop&crop=faces&h=400&w=400',
        },
        {
          name: 'Camellia Y.',
          role: 'Boost Your Engineering Career with senior engineer and co-founder',
          image: 'https://leland.imgix.net/profile-photos/65693c2380ee8859f6fddb0f.jpg?fit=crop&crop=faces&h=400&w=400',
        },
        {
          name: 'Jiashuo W.',
          role: 'Level Up Your Path to Software Engineer | Land Your Next Big Move',
          image: 'https://leland.imgix.net/profile-photos/63c8eaae80e789137f30d76e.jpeg?fit=crop&crop=faces&h=400&w=400',
        },
        {
          name: 'Aaron.C',
          role: 'Experienced Software Engineer and Technical Lead at Microsoft and Github',
          image: 'https://leland.imgix.net/profile-photos/629bd32d2c58be62fcc98e74.jpg?fit=crop&crop=faces&h=400&w=400',
        },
        // {
        //   name: 'Suyeol Yoon',
        //   role: 'Product Manager & Fullstack Software Engineer',
        //   image: 'https://media.licdn.com/dms/image/v2/D5603AQHApVEcsgspow/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724654890328?e=1730332800&v=beta&t=yo9YrOhV7A-fG5VoTPg12DkSkxUXe_kDmER5Y1A4Gm0',
        // },
        // {
        //   name: 'Jonghyuk Lee',
        //   role: 'Fullstack Software Engineer',
        //   image: 'https://media.licdn.com/dms/image/v2/D5603AQHh7j8oIw8Y_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1674770692015?e=1730332800&v=beta&t=LDgzy5bdeL33yfowdygc135FcqQ_KX-QujaKtMk_mNk',
        // },
        // {
        //   name: 'Taehoon Kim',
        //   role: 'Fullstack Software Engineer',
        //   image: 'https://media.licdn.com/dms/image/v2/D5603AQG3LG5sOfIlew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1697263633714?e=1730332800&v=beta&t=x9iRHqvGcSKN93624i-vkLtyXviJpwNyozMlLwFfkIc',
        // },
        // {
        //   name: 'Sky Song',
        //   role: 'UI Designer & Frontend Software Engineer',
        //   image: 'https://media.licdn.com/dms/image/v2/D5603AQEx6O84uNfsdQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700073395881?e=1730332800&v=beta&t=hCa13r06mljNUf-rsQEWkyLva2Fx8dNDEXqAyUc59C0',
        // },
      ];
    return (
        <>
        <CareerProgress/>
        <div className='py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mt-20'>
          <h2 className='text-3xl font-extrabold sm:text-4xl'>
            Meet Our Coaches
          </h2>
          <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
            We have a passionate team dedicated to delivering the best.
          </p>
        </div>
        <div className='mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className='flex flex-col items-center rounded-lg shadow-md p-6'
            >
              <img
                className='h-40 w-40 rounded-full object-cover mb-4'
                src={member.image}
                alt={member.name}
              />
              <h3 className='text-xl font-bold text-center'>{member.name}</h3>
              <p className='text-sm text-center'>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
        </>
        
    )
}
export default GapAnalyzer