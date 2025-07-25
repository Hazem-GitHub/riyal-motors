import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
    } else {
    return document.execCommand('copy', true, text);
    }
}

export function subtractDaysFromDate(currentDate: Date, daysToSubtract: number) {
    daysToSubtract = daysToSubtract || 0

    // Instantiate a new object based on the current Date
    const pastDate = new Date(currentDate)

    // Subtract the number of days
    pastDate.setDate(pastDate.getDate() - daysToSubtract)

    return pastDate
}

export function addDaysFromDate(currentDate: Date, daysToAdd: number) {
    daysToAdd = daysToAdd || 0

    // Instantiate a new object based on the current Date
    const futureDate = new Date(currentDate)

    // Add the number of days
    futureDate.setDate(futureDate.getDate() + daysToAdd)

    return futureDate
}

export const numberFormatter = (value: string, decimal:number = 0) => {
    return parseFloat(parseFloat(value).toFixed(decimal)).toLocaleString(
      "en-US",
      {
        maximumSignificantDigits: 10,
        useGrouping: true,
      }
    );
};


export const getBase64 = (file: File, cb: (result: string | ArrayBuffer | null) => void) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

export const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result as string);
  reader.onerror = error => reject(error);
});
