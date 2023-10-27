import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Result from "./components/Result";
import { useState } from "react";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1500,
        expectedReturn: 5,
        duration: 10,
    });

    const durationIsValid =
        userInput.duration > 0;

    function handleUserInput(inputKey, newValue) {
        setUserInput((existingUserInput) => {
            return {
                ...existingUserInput,
                [inputKey]: +newValue,
            };
        });
    }

    return (
        <>
            <Header />
            <Calculator
                onChangeProps={handleUserInput}
                userInput={userInput}
            />

            {durationIsValid ? (
                <Result resultInput={userInput} />
            ) : (
                <p className="center">
                    Duration Kosong
                </p>
            )}
        </>
    );
}

export default App;
