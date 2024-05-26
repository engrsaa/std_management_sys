import chalk from "chalk";
import inquirer from "inquirer";
let condition = true;
let final_select;
let feepay = null;
let std_Enrollment = await inquirer.prompt([
    {
        name: "enroll",
        message: "Enter Your Name",
        type: "input",
        validate: (input) => {
            if (input !== "") {
                return true;
            }
            else {
                console.log(chalk.bgRed("Please provide Name"));
            }
        },
    },
]);
let userId = Math.floor(Math.random() * 1000 + 11000);
async function paymentOptions(courseFee) {
    const userPayment = await inquirer.prompt({
        name: 'option',
        type: 'list',
        choices: ['Easy Paisa', 'Jazz Cash', 'Bank Transfer'],
        message: 'Select Payment Mode : '
    });
    let messageText = 'Enter Mobile Number :';
    let validationCallback = (input) => {
        let returnString = 'Please provide valid mobile number!';
        if (/[0-9]/.test(input) && input.length === 11) {
            return true;
        }
        return returnString;
    };
    if (userPayment.option === 'Bank Transfer') {
        messageText = 'Enter Account Number :';
        validationCallback = (input) => {
            let returnString = 'Please provide valid account number!';
            if (/[0-9]/.test(input) && input.length === 15) {
                return true;
            }
            return returnString;
        };
    }
    const userMobileNo = await inquirer.prompt({
        name: 'digits', type: 'input', message: messageText,
        validate: validationCallback
    });
    const userAmount = await inquirer.prompt({
        name: 'value', type: 'input',
        message: 'Enter Amount :',
        validate: (number) => {
            if (/[0-9]/.test(number)) {
                return true;
            }
            return 'Enter amount in digits!';
        }
    });
    if (userAmount.value >= Number(courseFee)) {
        let feeAmountDifference = userAmount.value - Number(courseFee);
        if (feeAmountDifference === 0) {
            console.log('Transaction Completed Successfully');
            feepay = true;
        }
        else {
            console.log(`Your balance amount amount is: ${feeAmountDifference}`);
            feepay = feeAmountDifference;
        }
    }
    else {
        console.log('Disable to Enroll as Insufficent Funds provided');
        feepay = false;
    }
}
while (condition) {
    let platform = await inquirer.prompt([
        {
            name: "faculty",
            message: "Where do you learn?",
            type: "list",
            choices: ["Online", "Onsite"],
        },
    ]);
    if (platform.faculty === "Online") {
        let selectCourses = await inquirer.prompt([
            {
                name: "courses",
                message: "Select Your course: ",
                type: "list",
                choices: [
                    "Website Designing",
                    "Graphic Designing",
                    "Social Media Marketing",
                    "Search Engine Optimization (SEO)",
                ],
            },
        ]);
        //----------------------------------------- Website Designing --------------------------------------------------------------------
        final_select = selectCourses.courses;
        if (final_select === "Website Designing") {
            let properties = {
                Duration: "3 months",
                Coursefee: "4000",
                Coursedescription: "HTML, CSS & JS",
            };
            console.log(properties);
            // first set of comments was placed here!
            const paymentResult = await paymentOptions(properties.Coursefee);
        }
        // -------------------------------- Graphic Designing ----------------------------------------------------
        else if (selectCourses.courses === "Graphic Designing") {
            let properties = {
                Duration: "9 months",
                Coursefee: "6000",
                Coursedescription: "Photoshop, illustrator & Adobe",
            };
            console.log(properties);
            // second set of comments was placed here!
            let paymentResult = await paymentOptions(properties.Coursefee);
        }
        // ----------------------------------------  Social Media Marketing ----------------------------------------------------------------
        else if (selectCourses.courses === "Social Media Marketing") {
            let properties = {
                Duration: "15 months",
                Coursefee: "10000",
                Coursedescription: "Facebook Marketing, Instagram Marketing, LinkedIn Marketing, Twitter Marketing & Tik Tok Marketing",
            };
            console.log(properties);
            // third set of comments was placed here!
            let paymentResult = await paymentOptions(properties.Coursefee);
        }
        // ---------------------------------------- SEO ------------------------------------------------------------------------
        else if (selectCourses.courses == "Search Engine Optimization (SEO)") {
            let properties = {
                Duration: "6 months",
                Coursefee: "5000",
                Coursedescription: "On-Page SEO & Off-Page SEO",
            };
            console.log(properties);
            // fourth set of comments was placed here!
            let paymentResult = await paymentOptions(properties.Coursefee);
        }
        // ------ Final Else ------which is never used as we set list of options-------------
        else {
            console.log(chalk.red(`Not At all !`));
        }
    }
    else if (platform.faculty === "Onsite") {
        let selectCourses = await inquirer.prompt([
            {
                name: "courses",
                message: "Select Your course: ",
                type: "list",
                choices: [
                    "Python Programming",
                    "English Language",
                    "Freelancing",
                    "MS Office",
                ],
            },
        ]);
        //----------------------------------------- Python Programming -----------------------------------------------------------------
        final_select = selectCourses.courses;
        feepay = feepay;
        if (final_select === "Python Programming") {
            let properties = {
                Duration: "12 months",
                Coursefee: "8000",
                Coursedescription: "Basic to Advance of Python Programming",
            };
            console.log(properties);
            // fifth set of comment was placed here!
            let paymentResult = await paymentOptions(properties.Coursefee);
        }
        // -------------------------------- English Language ----------------------------------------------------
        else if (selectCourses.courses === "English Language") {
            let properties = {
                Duration: "4 months",
                Coursefee: "2000",
                Coursedescription: "Language",
            };
            console.log(properties);
            // sixth set of comments was placed here!
            let paymentResult = await paymentOptions(properties.Coursefee);
        }
        // -------------------------------- Freelancing ----------------------------------------------------
        else if (selectCourses.courses === "Freelancing") {
            let properties = {
                Duration: "6 months",
                Coursefee: "5500",
                Coursedescription: "Fiver, Upwork & People Per Hour",
            };
            console.log(properties);
            // seventh set of comments was placed here!
            let paymentResult = await paymentOptions(properties.Coursefee);
        }
        // -------------------------------- MS Office ----------------------------------------------------
        else if (selectCourses.courses === "MS Office") {
            let properties = {
                Duration: "3 months",
                Coursefee: "2500",
                Coursedescription: "MS Word, Excel & Power Point",
            };
            console.log(properties);
            // eighth set of comments was placed here!
            let paymentResult = await paymentOptions(properties.Coursefee);
        }
    }
    console.log(feepay);
    if (feepay !== false) {
        console.log(chalk.greenBright(`Details \n${std_Enrollment.enroll}\n${userId}\nYou enrolled in our ${final_select} course`));
    }
    else {
        console.log(chalk.bgRedBright(`---------------------Please Go Again and Complete Your Enrollment!!------------------------`));
    }
    let repeat_ans = await inquirer.prompt({
        name: "ans",
        message: "Do you want another course?",
        type: "confirm",
        default: "true",
    });
    condition = repeat_ans.ans;
}
