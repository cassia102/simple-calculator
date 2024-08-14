import { useState } from "react";
import { buttonConfig } from "../utils/buttonConfig";
import Button from "./Button";

function Calculator() {
    const [currentNumber, setCurrentNumber] = useState('');
    const [input, setInput] = useState<string[]>([]);
    const [result, setResult] = useState<string>('');
    const [isPercentage, setIsPercentage] = useState<boolean>(false);

    const handleClick = (label: string, type: string) => {
        if (type === 'number') {
            setCurrentNumber((prev) => prev + label);
        
        } else if (type === 'operator') {
            if (currentNumber !== '') {
                setInput((prevInput) => [...prevInput, currentNumber, label]);
                setCurrentNumber('');
            }

        } else if (type === 'percentage') {
            if (currentNumber !== '') {
                const percentageValue = (parseFloat(currentNumber) / 100).toString();
                setCurrentNumber(percentageValue);
                setIsPercentage(true);
            }  
            
        } else if (type === 'toggle') {
            if (currentNumber !== '') {
                const toggledValue = (parseFloat(currentNumber) * -1).toString();
                setCurrentNumber(toggledValue);
            }   
        
        } else if (type === 'equals') {

            if (currentNumber !== '') {
                setInput((prevInput) => [...prevInput, currentNumber]);
                setCurrentNumber('');
                evaluateExpression([...input, currentNumber].join(''));
            }

        } else if (type === 'clear') {
            setCurrentNumber('');
            setInput([]);
            setResult('');
            setIsPercentage(false)
        }
    };

    const evaluateExpression = (expression: string) => {
        try {
            const result = new Function('return ' + expression)();
            setResult(result.toString());
        } catch (error) {
            setResult('Error');
        }
    };

    return ( 
        <div className="calculator">
            <div className="display-wrapper">
                <div className="input-display">{input.join(' ')}{currentNumber}</div>
                <div className="result-display">{result}</div>
            </div>
            <div className="button-wrapper">
                {buttonConfig.map(({ label, type }) => (
                    <Button
                    key={label}
                    label={label}
                    type={type}
                    onClick={() => handleClick(label, type)}
                    />
                ))}
            </div>
        </div>
     );
}

export default Calculator;