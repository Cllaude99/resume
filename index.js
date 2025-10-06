#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import inquirer from 'inquirer';

// 데이터 설정
const data = {
  ko: {
    name: chalk.black.bold('김태윤'),
    work: chalk.black('Software Engineer'),
    github: chalk.blue.underline('https://github.com/Cllaude99'),
    linkedin: chalk.blue.underline(
      'https://www.linkedin.com/in/%ED%83%9C%EC%9C%A4-%EA%B9%80-a94635301/'
    ),
    blog: chalk.blue.underline('https://velog.io/@cllaude/posts'),
    resume: chalk.blue.underline(
      'https://www.figma.com/design/5PCRrw8GCIBRMxa62s4oyC/%EA%B9%80%ED%83%9C%EC%9C%A4-%EC%9D%B4%EB%A0%A5%EC%84%9C'
    ),
    labels: {
      github: chalk.black.bold('GitHub:'),
      linkedin: chalk.black.bold('LinkedIn:'),
      blog: chalk.black.bold('블로그:'),
      resume: chalk.black.bold('이력서:'),
    },
  },
  en: {
    name: chalk.black.bold('Taeyoon Kim'),
    work: chalk.black('Software Engineer'),
    github: chalk.blue.underline('https://github.com/Cllaude99'),
    linkedin: chalk.blue.underline(
      'https://www.linkedin.com/in/%ED%83%9C%EC%9C%A4-%EA%B9%80-a94635301/'
    ),
    blog: chalk.blue.underline('https://velog.io/@cllaude/posts'),
    resume: chalk.blue.underline(
      'https://www.figma.com/design/5PCRrw8GCIBRMxa62s4oyC/%EA%B9%80%ED%83%9C%EC%9C%A4-%EC%9D%B4%EB%A0%A5%EC%84%9C'
    ),
    labels: {
      github: chalk.black.bold('GitHub:'),
      linkedin: chalk.black.bold('LinkedIn:'),
      blog: chalk.black.bold('Blog:'),
      resume: chalk.black.bold('Resume:'),
    },
  },
};

// 박스 스타일 설정
const boxenOptions = {
  padding: { left: 2, right: 2, top: 1, bottom: 1 },
  margin: { left: 0, right: 0, top: 1, bottom: 1 },
  borderStyle: 'round',
  borderColor: '#0064FF',
  backgroundColor: '#FFFFFF',
  width: 150,
  float: 'left',
};

// 언어 선택 프롬프트
const questions = [
  {
    type: 'list',
    name: 'language',
    message: '언어를 선택해주세요 / Please select a language:',
    choices: [
      { name: '한국어', value: 'ko' },
      { name: 'English', value: 'en' },
    ],
  },
];

// 메시지 생성 함수
const createMessage = (lang) => {
  const d = data[lang];
  return `
    ${d.name}
    ${d.work}

    ${d.labels.github} ${d.github}
    ${d.labels.linkedin} ${d.linkedin}
    ${d.labels.blog} ${d.blog}
    ${d.labels.resume} ${d.resume}
`;
};

// 메인 실행
async function main() {
  const answers = await inquirer.prompt(questions);
  const message = createMessage(answers.language);
  console.log(boxen(message, boxenOptions));
}

main().catch((error) => {
  console.error('An error occurred:', error);
  process.exit(1);
});
