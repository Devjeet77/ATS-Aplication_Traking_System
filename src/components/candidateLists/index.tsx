import React from "react";
import Icon from "../../assets/candidate/candidateIcon.png";

interface Candidate {
  id: number;
  name: string;
  address: string;
  interval: string;
  hashtags: string[];
  keywords: string[];
}

const CandidateLists: React.FC = () => {
  const candidatesData: Candidate[] = [
    {
      id: 1,
      name: "Aaliyah Sanderson",
      address: "Riyadh, Saudi Arabia",
      interval: "Bachelor - Cambridge University (2023 - 2023)",
      hashtags: ["#mba"],
      keywords: ["New York", "Marketing", "London"],
    },
    {
      id: 2,
      name: "John Doe",
      address: "Bostom, USA",
      interval: "Bachelor - MIT (2023 - 2023)",
      hashtags: ["#mba"],
      keywords: ["New York", "Marketing", "London"],
    },
    {
      id: 2,
      name: "Roy Jade",
      address: "Cambridge,  UK",
      interval: "Bachelor - Yale (2023 - 2023)",
      hashtags:[ "#seo"],
      keywords: ["New York", "Marketing", "London"],
    },
    {
      id: 3,
      name: "Ahmed Salman",
      address: "Delhi, India",
      interval: "Bachelor - Techenology (2018 - 2022)",
      hashtags: ["#coder"],
      keywords: ["India", "Developer", "India"],
    },
    {
      id: 4,
      name: "Thomas ",
      address: "Denver, Canada",
      interval: "Bachelor - Techenology (2016 - 2020)",
      hashtags: ["#frontend_Developer"],
      keywords: ["US", "Developer", "Canada"],
    },
    {
      id: 5,
      name: "Erza Miller",
      address: "Texas, America",
      interval: "Bachelor - Techenology (2017 - 2021)",
      hashtags:[ "#backend_Developer"],
      keywords: ["Texas", "Developer", "America"],
    },
    {
      id: 6,
      name: "Ben Affleck",
      address: "Alaska, America",
      interval: "Bachelor - Techenology (2010 - 2015)",
      hashtags: ["#fullStack_Developer"],
      keywords: ["Alaska", "Developer", "America"],
    },
  ];

  return (
    <>
      <div className="bg-white mt-9 rounded-lg text-sm border p-3">
        <div className="flex justify-between py-2">
          <div className="w-[50%] flex gap-5">
            <input
              type="checkbox"
              id="candidate"
              name="candidate"
              value="candidate"
            />{" "}
            <p className="text-blue font-bold">{candidatesData.length} Candidates</p>
          </div>
          <div className="flex justify-end gap-6">
            <p className="text-blue font-bold border-r ">Qualified</p>
            <p className="font-bold">
              Task{" "}
              <span className="bg-lightGrey font-light p-2 border-r rounded-full">
                32
              </span>
            </p>
            <p className="font-bold">
              Disqualified{" "}
              <span className="bg-lightGrey font-light p-2 rounded-full">
                32
              </span>
            </p>
          </div>
        </div>
        <hr />
        <div className="overflow-scroll h-screen">
          {candidatesData.map((candidate) => (
            <div key={candidate.id} className="flex gap-7 py-6">
              <input
                type="checkbox"
                id={`candidate-${candidate.id}`}
                name={`candidate-${candidate.id}`}
                value={`candidate-${candidate.id}`}
              />
              <img src={Icon} alt="" className="h-[100%] " />
              <div>
                <p className="text-xl">{candidate.name}</p>
                <p className="">{candidate.address}</p>
                <p className="">{candidate.interval}</p>
                <p className="text-blue flex gap-5">{candidate.hashtags}</p>
                <p className="flex gap-6">
                  {candidate.keywords.map((keyword, index) => (
                    <p
                      key={index}
                      className="text-taleGreen font-bold bg-taleGreenNeutral rounded-full p-1"
                    >
                      {keyword}
                    </p>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { CandidateLists };
