import { useState } from "react";
import Confetti from "react-confetti";

const DinePage = () => {
  const [cards] = useState([
    {
      name: "Dinner with Merritt at 6pm",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/5f402a9d4e121b7f850b4374/1598040794125-1WB0ZVV5K7BDT3359NFE/HP2A0644+%281%29.jpg",
    },
    {
      name: "Lunch with Sarah at 2pm",
      imageUrl:
        "https://meet.nyu.edu/wp-content/uploads/2020/09/Sara_ADOne.jpg",
    },
    {
      name: "Brunch with John at 11am",
      imageUrl: "https://meet.nyu.edu/wp-content/uploads/2019/11/muppet.gif",
    },
    {
      name: "No more matches!",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/016/627/402/non_2x/next-time-buttons-sign-label-speech-bubble-next-time-vector.jpg",
    },
  ]);

  const [accepted, setAccepted] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleAccept = () => {
    setAccepted(true);
    // Move to the next card after a short delay
    setTimeout(() => {
      setAccepted(false);
      setCurrentCardIndex((prevIndex) =>
        Math.min(prevIndex + 1, cards.length - 1)
      );
    }, 2000);
  };

  const handleReject = () => {
    // Move to the next card immediately
    setCurrentCardIndex((prevIndex) =>
      Math.min(prevIndex + 1, cards.length - 1)
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {accepted && <Confetti />}
      <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-6">
        {currentCardIndex < cards.length ? (
          <>
            <img
              src={cards[currentCardIndex].imageUrl}
              alt="Cat Placeholder"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold mb-4 text-center">
              {cards[currentCardIndex].name}
            </h3>
            {cards[currentCardIndex].name !== "No more matches!" && (
              <div className="flex justify-between">
                <button
                  onClick={handleReject}
                  className="reject-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Reject
                </button>
                <button
                  onClick={handleAccept}
                  className="accept-button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Accept
                </button>
              </div>
            )}
          </>
        ) : (
          <h3 className="text-xl font-bold text-center">No more cards!</h3>
        )}
      </div>
    </div>
  );
};

export default DinePage;
