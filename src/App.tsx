import { useState } from "react";

// Vite React & tailwind & typescript.
// To start with npm -> npm i -> npm run dev

// - Vytvoř formulář se skupinou checkboxů. Výchozí počet je jeden.
// - Pokud je poslední checkbox zaškrtnutý, přidej na konec formuláře jeden nezaškrtnutý.
// - Alespoň jeden checkbox musí být vždy zaškrtnutý.
// - Pro každý zaškrtnutý checkbox zobraz segment v chevron chart pod formulářem, který zabírá
// celou dostupnou šířku.
// - Na telefonu je chevron chart otočený o -90 stupňů a zabírá celou dostupnou výšku. Všechny
// segmenty jsou stejně veliké.
// - Barva segmentu je určena pořadím checkboxu, na základě jehož zaškrtnutí je zobrazen.
// - Vzhled s výjimkou základního tvaru chevron chart není součástí hodnocení.

function App() {
  const [checkboxes, setCheckboxes] = useState([
    {
      id: 1,
      checked: true,
    },
  ]);

  const handleCheckboxClick = (id: number, checked: boolean) => {
    if (
      !(checkboxes.filter((checkbox) => checkbox.checked === true).length === 1) ||
      !checked
    ) {
      setCheckboxes((prevCheckboxes) => {
        return prevCheckboxes.map((checkbox) =>
          checkbox.id === id ? { ...checkbox, checked: !checked } : checkbox
        );
      });
    }
  };

  // This is going to be batched with the handleCheckboxClick func, causing one re-render only

  if (checkboxes[checkboxes.length - 1].checked) {
    setCheckboxes((prevVal) => [
      ...prevVal,
      {
        id: checkboxes.length + 1,
        checked: false,
      },
    ]);
  }

  return (
    <main className="h-screen max-h-full flex sm:flex-col overflow-hidden">
      <section className="sm:min-w-full mb-2 overflow-y-auto">
        <form className="border-2 rounded-lg ">
          {checkboxes.map((checkbox) => (
            <input
              key={checkbox.id}
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleCheckboxClick(checkbox.id, checkbox.checked)}
              className={"w-5 h-5 border-2 rounded m-2"}
            />
          ))}
        </form>
      </section>
      <section className="sm:min-h-64 min-w-[10rem] max-w-full min-h-screen sm:h-[8rem] flex sm:flex-row flex-col sm:ml-0 ml-5 sm:static ">
        <div className="grid sm:grid-flow-col w-full h-full">
          {checkboxes.map((checkbox) => {
            if (checkbox.checked) {
              const opacity = Math.max(105 - checkbox.id * 5, 5);
              return (
                <div
                  key={checkbox.id}
                  className={`chevron mx-0 sm:my-0 bg-blue-950 bg-opacity-[${opacity}%] `}
                ></div>
              );
            }
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
