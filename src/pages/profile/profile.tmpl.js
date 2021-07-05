import Templator from '../../templator/Templator';

const template = `
  <main class="profile">
    
  </main>
`;

const authTemplate = new Templator(template);
export default renderedAuthTemplate = authTemplate.compile();