export default function Team() {
  const team = [
    {
      name: "John Smith",
      position: "Designation here",
      image:
        "https://swu7aik9l9.ufs.sh/f/w1oZdaymV9eMVKlYKpf4SZA1eOjlQ0bhm5c8RawkzrvB2GoP",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida massa lorem gravida justo. Ante consectetur id congue pulvinar libero tristique et semper.",
    },
    {
      name: "Elina Williams",
      position: "Designation here",
      image:
        "https://swu7aik9l9.ufs.sh/f/w1oZdaymV9eMau8se5JPYOkEVRC8KS5MQFbXehGcfN9dA27z",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida massa lorem gravida justo. Ante consectetur id congue pulvinar libero tristique et semper.",
    },
    {
      name: "John Doe ",
      position: "Designation here",
      image:
        "https://swu7aik9l9.ufs.sh/f/w1oZdaymV9eMdxK1fFhEwjTi4yYMGfNupQ6OHU1ZblKCo0Ac",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida massa lorem gravida justo. Ante consectetur id congue pulvinar libero tristique et semper.",
    },
  ];

  return (
    <div className="mb-8 bg-white rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">Team</h2>

      <p className="text-[#3E424A] mb-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>

      <div className="space-y-4 ">
        {team.map((member) => (
          <div key={member.name} className="p-6 bg-[#E8F4FD] rounded-lg ring-1 ring-blue-500">
            <div className="flex flex-col md:flex-row gap-6 ">
              <div className="text-center md:w-48 ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-auto h-auto rounded-lg mx-auto mb-2"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-[#788F9B]">{member.position}</p>
              </div>
              <p className="flex-1 text-[#0F1629]">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
