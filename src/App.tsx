import { useCallback, useState } from "react";
import "./App.css";
import CardBankComponent from "./components/molecules/card-bank";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import ModalComponent from "./components/molecules/modal";
import TextFieldComponent from "./components/atoms/textfield";
import Button from "./components/atoms/button";
import { cards, cardType } from "./helper/data/dummyData";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [listData, setListData] = useState(cards);
  const [showModal, setShowModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [detailsCard, setDetailsCard] = useState<cardType>({} as cardType);
  const [form, setForm] = useState({
    title: "",
    noCard: "",
    expDate: "",
    color: "#000",
    limit: "0",
  });

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % listData.length);
  }, [listData.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + listData.length) % listData.length);
  }, [listData.length]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      console.log("e target: ", e.target);
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    },
    []
  );

  const showDetails = useCallback((card: cardType) => {
    setDetailsModal(true);
    setDetailsCard(card);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (form.title && form.noCard && form.expDate) {
        setListData([...listData, { ...form, id: listData.length + 1 }]);
        setForm({
          title: "",
          noCard: "",
          expDate: "",
          limit: "0",
          color: "#000000",
        });
        setShowModal(false);
      }
    },
    [form, listData]
  );

  return (
    <>
      {/* modal add card */}
      <ModalComponent
        bgCard="#fff"
        show={showModal}
        closeModal={() => setShowModal(false)}
      >
        <div className="flex flex-col gap-y-4">
          <h4>Add New Card</h4>
          <form
            className="flex flex-col gap-y-3"
            onSubmit={handleSubmit}
            data-testid="form_add_card"
          >
            <div className="">
              <label htmlFor="">Credit Card Holder</label>
              <TextFieldComponent
                type="text"
                name="title"
                placeholder="Put card holder"
                value={form.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <label htmlFor="">Credit Card Number</label>
              <TextFieldComponent
                type="text"
                name="noCard"
                placeholder="Credit card number"
                value={form.noCard}
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <label htmlFor="">Credit Card Spend Limit</label>
              <TextFieldComponent
                type="text"
                name="limit"
                placeholder="Credit card limit"
                value={form.limit}
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <label id="color-label">Credit Card Spend Color</label>
              <input
                aria-labelledby="color-label"
                className=" rounded-md w-full border border-gray-200 max-h-[38px]"
                name="color"
                type="color"
                onChange={handleInputChange}
                placeholder="Credit card limit"
              />
            </div>
            <div className="">
              <label htmlFor="">Credit Card Expired Date</label>
              <TextFieldComponent
                type="date"
                placeholder="Credit card expired date"
                value={form.expDate}
                name="expDate"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center justify-end text-gra gap-x-2 bg-purpl">
              <Button
                style="outlined"
                color="gray-200"
                bgColor="gray-200"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
              <Button
                style="solid"
                color="white"
                type="submit"
                className="bg-blue-800 text-center"
              >
                Add
              </Button>
            </div>
          </form>
        </div>
      </ModalComponent>

      {/* modal details card */}
      <ModalComponent
        bgCard="#fff"
        show={detailsModal}
        closeModal={() => setDetailsModal(false)}
      >
        <div className="flex flex-col gap-y-3 w-[350px]">
          <h2 className="text-lg font-semibold mb-4">Card Detail</h2>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="text-gray-600 py-2">Card Holder name</td>
                <td
                  className="text-gray-900 font-medium"
                  data-testid="details_card_name"
                >
                  {detailsCard.title}
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="text-gray-600 py-2">Expired At</td>
                <td
                  className="text-gray-900 font-medium"
                  data-testid="details_card_exp"
                >
                  {detailsCard.expDate}
                </td>
              </tr>
              <tr>
                <td className="text-gray-600 py-2">Card Color</td>
                <td>
                  <div
                    className="w-10 h-5 rounded-md border border-gray-300"
                    style={{ backgroundColor: detailsCard.color }}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setDetailsModal(false)}
              className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
              data-testid="cancel_details_btn"
            >
              Cancel
            </button>
          </div>
        </div>
      </ModalComponent>
      <div className=" w-full max-w-4xl mx-auto bg-gray-200/25 px-3 py-4 mt-5 rounded-lg">
        <div className="flex justify-between text-sm">
          <p className="font-semibold">Cards</p>
          <div className="flex items-center gap-x-1 text-red-500">
            <p>View All</p>
            <FaChevronRight />
          </div>
        </div>
        <div className="overflow-hidden mt-2">
          <div className="flex justify-center gap-2">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="relative mt-2">
            <div
              className="flex transition-transform duration-500 gap-x-5"
              style={{ transform: `translateX(-${currentIndex * 300}px)` }}
            >
              {/* card for craete card-bank */}
              <div>
                <div
                  className="flex flex-col justify-center items-center border border-dashed p-3 rounded-lg h-full w-44 text-xs gap-y-1 cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  <div className=" p-1 w-5 h-5 rounded-full border-black border-2 flex items-center justify-center leading-none font-bold">
                    +
                  </div>
                  <p data-testid="add_card_btn">Add New Card</p>
                </div>
              </div>
              {/* list card-bank */}
              {listData.map((card) => (
                <div
                  onClick={() => showDetails(card)}
                  data-testid="details_card"
                >
                  <CardBankComponent
                    title={card.title}
                    bgColor={card.color}
                    expDate={card.expDate}
                    noCard={card.noCard}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full shadow ${
                currentIndex === 0 && "hidden"
              }`}
            >
              <FaChevronLeft data-testid="btn_prev" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === cards.length - 1}
              className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full shadow ${
                currentIndex === cards.length - 1 && "hidden"
              }`}
            >
              <FaChevronRight data-testid="btn_next" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
