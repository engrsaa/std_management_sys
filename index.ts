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
      } else {
        console.log(chalk.bgRed("Please provide Name"));
      }
    },
  },
]);
let userId = Math.floor(Math.random() * 1000 + 11000);
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
      let properties: any = {
        Duration: "3 months",
        Coursefee: "4000",
        Coursedescription: "HTML, CSS & JS",
      };
      console.log(properties);

      let fees = await inquirer.prompt([
        {
          name: "webfee",
          message: "Select Your Payment Criteria",
          type: "list",
          choices: ["Easy Paisa", "Jazz Cash", "Bank Account"],
        },
      ]);
      // ----------------------------------------- EASY PASIA METHOD ----------------------------------------
      if (fees.webfee === "Easy Paisa") {
        let getinfoforep = await inquirer.prompt([
          {
            name: "epinfo",
            message: "Enter Your Mobile Number",
            type: "input",
          },
        ]);

        if (getinfoforep.epinfo.length === 11) {
          let payep = await inquirer.prompt([
            {
              name: "eppay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payep.eppay >= properties.Coursefee) {
            let feeamountofweb = payep.eppay - properties.Coursefee;
            console.log(`Your balance amount amount is: ${feeamountofweb}`);
            feepay = feeamountofweb;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }

      // ---------------------------------- JAZZ CASH METHOD ---------------------------------------------------------
      else if (fees.webfee === "Jazz Cash") {
        let getinfoforjz = await inquirer.prompt([
          {
            name: "jzinfo",
            message: "Enter Your Mobile Number",
            type: "input",
          },
        ]);

        if (getinfoforjz.jzinfo.length === 11) {
          let payjz = await inquirer.prompt([
            {
              name: "jzpay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payjz.jzpay >= properties.Coursefee) {
            let feeamountofweb = payjz.jzpay - properties.Coursefee;
            console.log(`Your balance amount amount is: ${feeamountofweb}`);
            feepay = feeamountofweb;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }

      // ----------------------------------------------BANK ACCOUNT METHOD ------------------------------------------
      else if (fees.webfee === "Bank Account") {
        let getinfoforba = await inquirer.prompt([
          {
            name: "bainfo",
            message: "Enter Your Account Number",
            type: "input",
          },
        ]);

        if (getinfoforba.bainfo.length <= 15) {
          let payba = await inquirer.prompt([
            {
              name: "bapay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payba.bapay >= properties.Coursefee) {
            let feeamountofweb = payba.bapay - properties.Coursefee;
            console.log(`Your balance amount amount is: ${feeamountofweb}`);
            feepay = feeamountofweb;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }
    }
    // -------------------------------- Graphic Designing ----------------------------------------------------
    else if (selectCourses.courses === "Graphic Designing") {
      let properties: any = {
        Duration: "9 months",
        Coursefee: "6000",
        Coursedescription: "Photoshop, illustrator & Adobe",
      };
      console.log(properties);

      let fees = await inquirer.prompt([
        {
          name: "graphicfee",
          message: "Select Your Payment Criteria",
          type: "list",
          choices: ["Easy Paisa", "Jazz Cash", "Bank Account"],
        },
      ]);
      // ----------------------------------------- EASY PASIA METHOD ----------------------------------------
      if (fees.graphicfee === "Easy Paisa") {
        let getinfoforep = await inquirer.prompt([
          {
            name: "epinfo",
            message: "Enter Your Mobile Number",
            type: "input",
          },
        ]);

        if (getinfoforep.epinfo.length === 11) {
          let payep = await inquirer.prompt([
            {
              name: "eppay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payep.eppay >= properties.Coursefee) {
            let feeamountofgraphic = payep.eppay - properties.Coursefee;
            console.log(`Your balance amount amount is: ${feeamountofgraphic}`);
            feepay = feeamountofgraphic;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }

      // ---------------------------------- JAZZ CASH METHOD ---------------------------------------------------------
      else if (fees.graphicfee === "Jazz Cash") {
        let getinfoforjz = await inquirer.prompt([
          {
            name: "jzinfo",
            message: "Enter Your Mobile Number",
            type: "input",
          },
        ]);

        if (getinfoforjz.jzinfo.length === 11) {
          let payjz = await inquirer.prompt([
            {
              name: "jzpay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payjz.jzpay >= properties.Coursefee) {
            let feeamountofgraphic = payjz.jzpay - properties.Coursefee;
            console.log(`Your balance amount amount is: ${feeamountofgraphic}`);
            feepay = feeamountofgraphic;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }

      // ----------------------------------------------BANK ACCOUNT METHOD ------------------------------------------
      else if (fees.graphicfee === "Bank Account") {
        let getinfoforba = await inquirer.prompt([
          {
            name: "bainfo",
            message: "Enter Your Account Number",
            type: "input",
          },
        ]);

        if (getinfoforba.bainfo.length <= 15) {
          let payba = await inquirer.prompt([
            {
              name: "bapay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payba.bapay >= properties.Coursefee) {
            let feeamountofgraphic = payba.bapay - properties.Coursefee;
            console.log(`Your balance amount amount is: ${feeamountofgraphic}`);
            feepay = feeamountofgraphic;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }
    }
    // ----------------------------------------  Social Media Marketing ----------------------------------------------------------------
    else if (selectCourses.courses === "Social Media Marketing") {
      let properties: any = {
        Duration: "15 months",
        Coursefee: "10000",
        Coursedescription:
          "Facebook Marketing, Instagram Marketing, LinkedIn Marketing, Twitter Marketing & Tik Tok Marketing",
      };
      console.log(properties);

      let fees = await inquirer.prompt([
        {
          name: "marketingfee",
          message: "Select Your Payment Criteria",
          type: "list",
          choices: ["Easy Paisa", "Jazz Cash", "Bank Account"],
        },
      ]);
      // ----------------------------------------- EASY PASIA METHOD ----------------------------------------
      if (fees.marketingfee === "Easy Paisa") {
        let getinfoforep = await inquirer.prompt([
          {
            name: "epinfo",
            message: "Enter Your Mobile Number",
            type: "input",
          },
        ]);

        if (getinfoforep.epinfo.length === 11) {
          let payep = await inquirer.prompt([
            {
              name: "eppay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payep.eppay >= properties.Coursefee) {
            let feeamountofmarketing = payep.eppay - properties.Coursefee;
            console.log(
              `Your balance amount amount is: ${feeamountofmarketing}`
            );
            feepay = feeamountofmarketing;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }

      // ---------------------------------- JAZZ CASH METHOD ---------------------------------------------------------
      else if (fees.marketingfee === "Jazz Cash") {
        let getinfoforjz = await inquirer.prompt([
          {
            name: "jzinfo",
            message: "Enter Your Mobile Number",
            type: "input",
          },
        ]);

        if (getinfoforjz.jzinfo.length === 11) {
          let payjz = await inquirer.prompt([
            {
              name: "jzpay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payjz.jzpay >= properties.Coursefee) {
            let feeamountofmarketing = payjz.jzpay - properties.Coursefee;
            console.log(
              `Your balance amount amount is: ${feeamountofmarketing}`
            );
            feepay = feeamountofmarketing;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }

      // ----------------------------------------------BANK ACCOUNT METHOD ------------------------------------------
      else if (fees.marketingfee === "Bank Account") {
        let getinfoforba = await inquirer.prompt([
          {
            name: "bainfo",
            message: "Enter Your Account Number",
            type: "input",
          },
        ]);

        if (getinfoforba.bainfo.length <= 15) {
          let payba = await inquirer.prompt([
            {
              name: "bapay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payba.bapay >= properties.Coursefee) {
            let feeamountofmarketing = payba.bapay - properties.Coursefee;
            console.log(
              `Your balance amount amount is: ${feeamountofmarketing}`
            );
            feepay = feeamountofmarketing;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }
    }

    // ---------------------------------------- SEO ------------------------------------------------------------------------
    else if (selectCourses.courses == "Search Engine Optimization (SEO)") {
      let properties: any = {
        Duration: "6 months",
        Coursefee: "5000",
        Coursedescription: "On-Page SEO & Off-Page SEO",
      };
      console.log(properties);

      let fees = await inquirer.prompt([
        {
          name: "SEOfee",
          message: "Select Your Payment Criteria",
          type: "list",
          choices: ["Easy Paisa", "Jazz Cash", "Bank Account"],
        },
      ]);
      // ----------------------------------------- EASY PASIA METHOD ----------------------------------------
      if (fees.SEOfee === "Easy Paisa") {
        let getinfoforep = await inquirer.prompt([
          {
            name: "epinfo",
            message: "Enter Your Mobile Number",
            type: "input",
          },
        ]);

        if (getinfoforep.epinfo.length === 11) {
          let payep = await inquirer.prompt([
            {
              name: "eppay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payep.eppay >= properties.Coursefee) {
            let feeamountofseo = payep.eppay - properties.Coursefee;
            console.log(`Your balance amount amount is: ${feeamountofseo}`);
            feepay = feeamountofseo;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }

      // ---------------------------------- JAZZ CASH METHOD ---------------------------------------------------------
      else if (fees.SEOfee === "Jazz Cash") {
        let getinfoforjz = await inquirer.prompt([
          {
            name: "jzinfo",
            message: "Enter Your Mobile Number",
            type: "input",
          },
        ]);

        if (getinfoforjz.jzinfo.length === 11) {
          let payjz = await inquirer.prompt([
            {
              name: "jzpay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payjz.jzpay >= properties.Coursefee) {
            let feeamountofseo = payjz.jzpay - properties.Coursefee;
            console.log(`Your balance amount amount is: ${feeamountofseo}`);
            feepay = feeamountofseo;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }

      // ----------------------------------------------BANK ACCOUNT METHOD ------------------------------------------
      else if (fees.SEOfee === "Bank Account") {
        let getinfoforba = await inquirer.prompt([
          {
            name: "bainfo",
            message: "Enter Your Account Number",
            type: "input",
          },
        ]);

        if (getinfoforba.bainfo.length <= 15) {
          let payba = await inquirer.prompt([
            {
              name: "bapay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payba.bapay >= properties.Coursefee) {
            let feeamountofseo = payba.bapay - properties.Coursefee;
            console.log(`Your balance amount amount is: ${feeamountofseo}`);
            feepay = feeamountofseo;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }
    }
    // ------------------------------------------------------------ Final Else ---------------------------------------------------------
    else {
      console.log(chalk.red(`Not At all !`));
    }
  } else if (platform.faculty === "Onsite") {
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
      let properties: any = {
        Duration: "12 months",
        Coursefee: "8000",
        Coursedescription: "Basic to Advance of Python Programming",
      };
      console.log(properties);

      let fees = await inquirer.prompt([
        {
          name: "progfee",
          message: "Select Your Payment Criteria",
          type: "list",
          choices: ["Easy Paisa", "Jazz Cash", "Bank Account"],
        },
      ]);
      // ----------------------------------------- EASY PASIA METHOD ----------------------------------------
      if (fees.progfee === "Easy Paisa") {
        let getinfoforep = await inquirer.prompt([
          {
            name: "epinfo",
            message: "Enter Your Mobile Number",
            type: "input",
          },
        ]);

        if (getinfoforep.epinfo.length === 11) {
          let payep = await inquirer.prompt([
            {
              name: "eppay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payep.eppay >= properties.Coursefee) {
            let feeamountofprog = payep.eppay - properties.Coursefee;
            console.log(`Your balance amount amount is: ${feeamountofprog}`);
            feepay = feeamountofprog;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }

      // ---------------------------------- JAZZ CASH METHOD ---------------------------------------------------------
      else if (fees.progfee === "Jazz Cash") {
        let getinfoforjz = await inquirer.prompt([
          {
            name: "jzinfo",
            message: "Enter Your Mobile Number",
            type: "input",
          },
        ]);

        if (getinfoforjz.jzinfo.length === 11) {
          let payjz = await inquirer.prompt([
            {
              name: "jzpay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payjz.jzpay >= properties.Coursefee) {
            let feeamountofprog = payjz.jzpay - properties.Coursefee;
            console.log(`Your balance amount amount is: ${feeamountofprog}`);
            feepay = feeamountofprog;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }

      // ----------------------------------------------BANK ACCOUNT METHOD ------------------------------------------
      else if (fees.progfee === "Bank Account") {
        let getinfoforba = await inquirer.prompt([
          {
            name: "bainfo",
            message: "Enter Your Account Number",
            type: "input",
          },
        ]);

        if (getinfoforba.bainfo.length <= 15) {
          let payba = await inquirer.prompt([
            {
              name: "bapay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payba.bapay >= properties.Coursefee) {
            let feeamountofprog = payba.bapay - properties.Coursefee;
            console.log(`Your balance amount amount is: ${feeamountofprog}`);
            feepay = feeamountofprog;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }
    }
    // -------------------------------- English Language ----------------------------------------------------
    else if (selectCourses.courses === "English Language") {
      let properties: any = {
        Duration: "4 months",
        Coursefee: "2000",
        Coursedescription: "Language",
      };
      console.log(properties);

      let fees = await inquirer.prompt([
        {
          name: "englangfee",
          message: "Select Your Payment Criteria",
          type: "list",
          choices: ["Easy Paisa", "Jazz Cash", "Bank Account"],
        },
      ]);
      // ----------------------------------------- EASY PASIA METHOD ----------------------------------------
      if (fees.englangfee === "Easy Paisa") {
        let getinfoforep = await inquirer.prompt([
          {
            name: "epinfo",
            message: "Enter Your Mobile Number",
            type: "input",
          },
        ]);

        if (getinfoforep.epinfo.length === 11) {
          let payep = await inquirer.prompt([
            {
              name: "eppay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payep.eppay >= properties.Coursefee) {
            let feeamountofenglang = payep.eppay - properties.Coursefee;
            console.log(`Your balance amount amount is: ${feeamountofenglang}`);
            feepay = feeamountofenglang;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }

      // ---------------------------------- JAZZ CASH METHOD ---------------------------------------------------------
      else if (fees.englangfee === "Jazz Cash") {
        let getinfoforjz = await inquirer.prompt([
          {
            name: "jzinfo",
            message: "Enter Your Mobile Number",
            type: "input",
          },
        ]);

        if (getinfoforjz.jzinfo.length === 11) {
          let payjz = await inquirer.prompt([
            {
              name: "jzpay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payjz.jzpay >= properties.Coursefee) {
            let feeamountofenglang = payjz.jzpay - properties.Coursefee;
            console.log(`Your balance amount amount is: ${feeamountofenglang}`);
            feepay = feeamountofenglang;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }

      // ----------------------------------------------BANK ACCOUNT METHOD ------------------------------------------
      else if (fees.englangfee === "Bank Account") {
        let getinfoforba = await inquirer.prompt([
          {
            name: "bainfo",
            message: "Enter Your Account Number",
            type: "input",
          },
        ]);

        if (getinfoforba.bainfo.length <= 15) {
          let payba = await inquirer.prompt([
            {
              name: "bapay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payba.bapay >= properties.Coursefee) {
            let feeamountofenglang = payba.bapay - properties.Coursefee;
            console.log(`Your balance amount amount is: ${feeamountofenglang}`);
            feepay = feeamountofenglang;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }
    }

    // -------------------------------- Freelancing ----------------------------------------------------
    else if (selectCourses.courses === "Freelancing") {
      let properties: any = {
        Duration: "6 months",
        Coursefee: "5500",
        Coursedescription: "Fiver, Upwork & People Per Hour",
      };
      console.log(properties);

      let fees = await inquirer.prompt([
        {
          name: "freelancingfee",
          message: "Select Your Payment Criteria",
          type: "list",
          choices: ["Easy Paisa", "Jazz Cash", "Bank Account"],
        },
      ]);
      // ----------------------------------------- EASY PASIA METHOD ----------------------------------------
      if (fees.freelancingfee === "Easy Paisa") {
        let getinfoforep = await inquirer.prompt([
          {
            name: "epinfo",
            message: "Enter Your Mobile Number",
            type: "input",
          },
        ]);

        if (getinfoforep.epinfo.length === 11) {
          let payep = await inquirer.prompt([
            {
              name: "eppay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payep.eppay >= properties.Coursefee) {
            let feeamountoffreelacing = payep.eppay - properties.Coursefee;
            console.log(
              `Your balance amount amount is: ${feeamountoffreelacing}`
            );
            feepay = feeamountoffreelacing;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }

      // ---------------------------------- JAZZ CASH METHOD ---------------------------------------------------------
      else if (fees.freelancingfee === "Jazz Cash") {
        let getinfoforjz = await inquirer.prompt([
          {
            name: "jzinfo",
            message: "Enter Your Mobile Number",
            type: "input",
          },
        ]);

        if (getinfoforjz.jzinfo.length === 11) {
          let payjz = await inquirer.prompt([
            {
              name: "jzpay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payjz.jzpay >= properties.Coursefee) {
            let feeamountoffreelacing = payjz.jzpay - properties.Coursefee;
            console.log(
              `Your balance amount amount is: ${feeamountoffreelacing}`
            );
            feepay = feeamountoffreelacing;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }

      // ----------------------------------------------BANK ACCOUNT METHOD ------------------------------------------
      else if (fees.freelancingfee === "Bank Account") {
        let getinfoforba = await inquirer.prompt([
          {
            name: "bainfo",
            message: "Enter Your Account Number",
            type: "input",
          },
        ]);

        if (getinfoforba.bainfo.length <= 15) {
          let payba = await inquirer.prompt([
            {
              name: "bapay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payba.bapay >= properties.Coursefee) {
            let feeamountoffreelacing = payba.bapay - properties.Coursefee;
            console.log(
              `Your balance amount amount is: ${feeamountoffreelacing}`
            );
            feepay = feeamountoffreelacing;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }
    }

    // -------------------------------- MS Office ----------------------------------------------------
    else if (selectCourses.courses === "MS Office") {
      let properties: any = {
        Duration: "3 months",
        Coursefee: "2500",
        Coursedescription: "MS Word, Excel & Power Point",
      };
      console.log(properties);

      let fees = await inquirer.prompt([
        {
          name: "MSOfficefee",
          message: "Select Your Payment Criteria",
          type: "list",
          choices: ["Easy Paisa", "Jazz Cash", "Bank Account"],
        },
      ]);
      // ----------------------------------------- EASY PASIA METHOD ----------------------------------------
      if (fees.MSOfficefee === "Easy Paisa") {
        let getinfoforep = await inquirer.prompt([
          {
            name: "epinfo",
            message: "Enter Your Mobile Number",
            type: "input",
          },
        ]);

        if (getinfoforep.epinfo.length === 11) {
          let payep = await inquirer.prompt([
            {
              name: "eppay",
              message: "Enter Your Amount",
              type: "input",
              validate:(input => {
                if(input >= properties.Coursefee){
                    return true
                }
                else{
                    console.log(`\n Enter ammount`);
                    
                }
              })
            },
          ]);

          if (payep.eppay >= properties.Coursefee) {
            let feeamountofmsoffice = payep.eppay - properties.Coursefee;
            console.log(
              `Your balance amount amount is: ${feeamountofmsoffice}`
            );
            feepay = feeamountofmsoffice;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }

      // ---------------------------------- JAZZ CASH METHOD ---------------------------------------------------------
      else if (fees.MSOfficefee === "Jazz Cash") {
        let getinfoforjz = await inquirer.prompt([
          {
            name: "jzinfo",
            message: "Enter Your Mobile Number",
            type: "input",
          },
        ]);

        if (getinfoforjz.jzinfo.length === 11) {
          let payjz = await inquirer.prompt([
            {
              name: "jzpay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payjz.jzpay >= properties.Coursefee) {
            let feeamountofmsoffice = payjz.jzpay - properties.Coursefee;
            console.log(
              `Your balance amount amount is: ${feeamountofmsoffice}`
            );
            feepay = feeamountofmsoffice;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }

      // ----------------------------------------------BANK ACCOUNT METHOD ------------------------------------------
      else if (fees.MSOfficefee === "Bank Account") {
        let getinfoforba = await inquirer.prompt([
          {
            name: "bainfo",
            message: "Enter Your Account Number",
            type: "input",
          },
        ]);

        if (getinfoforba.bainfo.length <= 15) {
          let payba = await inquirer.prompt([
            {
              name: "bapay",
              message: "Enter Your Amount",
              type: "input",
            },
          ]);

          if (payba.bapay >= properties.Coursefee) {
            let feeamountofmsoffice = payba.bapay - properties.Coursefee;
            console.log(
              `Your balance amount amount is: ${feeamountofmsoffice}`
            );
            feepay = feeamountofmsoffice;
          } else {
            console.log(`Enter a Valid Amount!`);
          }
        } else {
          console.log(`Enter a Valid Number!`);
        }
      }
    }
  }

  console.log(feepay);
  if (feepay !== null && feepay >= 0 && feepay!==undefined) {
    console.log(
      chalk.greenBright(
        `Details \n${std_Enrollment.enroll}\n${userId}\nYou enrolled in our ${final_select} course`
      )
    );
  }
  else{
    console.log(chalk.bgRedBright(`---------------------Please Go Again and Complete Your Enrollment!!------------------------`));
    
  }
  let repeat_ans: any = await inquirer.prompt({
    name: "ans",
    message: "Do you want another course?",
    type: "confirm",
    default: "true",
  });
  condition = repeat_ans.ans;
}
