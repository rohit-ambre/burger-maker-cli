#! /usr/bin/env node
import { Command } from 'commander';
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner'

const program = new Command();

const prompts = [
    {
        name: 'name',
        message: 'Your Name?',
        validate: function(name) {
            if (!name) {
                return "Name is required"
            }
            return true
        }
    },
    {
        name: 'bun',
        message: 'Choose a bun?',
        type: 'rawlist',
        choices: ['Classic', 'Whole Wheat', 'Gluten Free'],
        default: 'Classic'
    },
    {
        name: 'patty',
        message: 'Choose a patty?',
        type: 'rawlist',
        choices: ['Veg', 'Chicken', 'Today\'s Special'],
        default: 'Veg'
    },
    {
        name: 'toppings',
        message: 'Choose your favourite toppings',
        type: 'checkbox',
        choices: ['Tomato', 'Lettuce', 'Cheese', 'Onion']
    },
    {
        name: 'sauces',
        message: 'Choose your favourite sauces',
        type: 'checkbox',
        choices: ['Mayonnaise', 'Ketchup', 'Mustard']
    },
]


program
    .name('burger-maker')
    .description('Order a burger from CLI')
    .version('1.0.0')
    .command('order')
    .description('Order a burger')
    .action(async function(){
        console.log('in action')
        const answers = await inquirer.prompt(prompts)
        const spinner = createSpinner('Your Order is in process').start()
        spinner.spin()

        setTimeout(() => {
            spinner.success({ text: 'Successful!' })
            const order = `${answers.name}, your burger order with ${answers.bun} bun, ${answers.patty} patty${answers.toppings.length ? ', with '+answers.toppings.join(', ')+ ' toppings' : ''} ${answers.sauces.length ? 'and '+answers.sauces.join(', ')+ ' sauces' : ''} is ready.`;
            console.log(order)
        }, 3000)
    })

program.parse()
