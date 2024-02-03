import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ArticleList } from './ArticleList'
import { Article, ArticleView } from '../../model/types/article'

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> = args => (
    <ArticleList {...args} />
)

const data = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Що нового в JavaScript в 2024?',
    img: '',
    views: 1022,
    createdAt: '27.01.2024',
    user: {
        id: '1',
        username: 'admin',
    },
    type: ['IT', 'SCIENCE', 'POLITICS', 'ECONOMICS'],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок цього блоку',
            paragraphs: [
                'Програма, яку за традицією називають Hello, world!, дуже проста. Вона виводить кудись фразу «Hello, world!», або іншу подібну, засобами якоїсь мови.',
                "JavaScript - це мова, програми на якій можна виконувати в різних середовищах. У нашому випадку йдеться про браузери та про серверну платформу Node.js. Якщо досі ви не написали жодного рядка коду на JS і читаєте цей текст у браузері, на настільному комп'ютері, це означає, що ви буквально за лічені секунди від своєї першої JavaScript-програми.",
                'Існують інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Як правило, код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати безпосередньо в код сторінки. Все це робиться за допомогою тега <script>. Коли браузер виявляє такий код, він виконує його. Подробиці про тег script можна переглянути на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою засобами JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити і засобами даного ресурсу (шукайте кнопку Try it Yourself), але ми зробимо трохи інакше. А саме, створимо в якомусь текстовому редакторі (наприклад - в VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо в нього наступний код:',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n<body>\n<p id="hello"></p>\n\n<script>\ndocument.getElementById("hello").innerHTML = "Hello, world!";\n</script>\n</body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Заголовок цього блоку',
            paragraphs: [
                'Програма, яку за традицією називають Hello, world!, дуже проста. Вона виводить кудись фразу «Hello, world!», або іншу подібну, засобами якоїсь мови.',
                'Існують інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Як правило, код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати безпосередньо в код сторінки. Все це робиться за допомогою тега <script>. Коли браузер виявляє такий код, він виконує його. Подробиці про тег script можна переглянути на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою засобами JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити і засобами даного ресурсу (шукайте кнопку Try it Yourself), але ми зробимо трохи інакше. А саме, створимо в якомусь текстовому редакторі (наприклад - в VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо в нього наступний код:',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: '',
            title: 'Рисунок 1 - скріншот сайту',
        },
        {
            id: '3',
            type: 'CODE',
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'Заголовок цього блоку',
            paragraphs: [
                "JavaScript - це мова, програми на якій можна виконувати в різних середовищах. У нашому випадку йдеться про браузери та про серверну платформу Node.js. Якщо досі ви не написали жодного рядка коду на JS і читаєте цей текст у браузері, на настільному комп'ютері, це означає, що ви буквально за лічені секунди від своєї першої JavaScript-програми.",
                'Існують інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Як правило, код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати безпосередньо в код сторінки. Все це робиться за допомогою тега <script>. Коли браузер виявляє такий код, він виконує його. Подробиці про тег script можна переглянути на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою засобами JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити і засобами даного ресурсу (шукайте кнопку Try it Yourself), але ми зробимо трохи інакше. А саме, створимо в якомусь текстовому редакторі (наприклад - в VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо в нього наступний код:',
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: '',
            title: 'Рисунок 1 - скріншот сайту',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'Заголовок цього блоку',
            paragraphs: [
                "JavaScript - це мова, програми на якій можна виконувати в різних середовищах. У нашому випадку йдеться про браузери та про серверну платформу Node.js. Якщо досі ви не написали жодного рядка коду на JS і читаєте цей текст у браузері, на настільному комп'ютері, це означає, що ви буквально за лічені секунди від своєї першої JavaScript-програми.",
            ],
        },
    ],
} as Article

export const LoadingBig = Template.bind({})
LoadingBig.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.BIG,
}

export const LoadingSmall = Template.bind({})
LoadingSmall.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.SMALL,
}

export const ListSmall = Template.bind({})
ListSmall.args = {
    articles: new Array(9).fill(0).map((item, index) => ({
        ...data,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleView.SMALL,
}

export const ListBig = Template.bind({})
ListBig.args = {
    articles: new Array(9).fill(0).map((item, index) => ({
        ...data,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleView.BIG,
}
