import type { FC } from 'react';

export const ProseDemo: FC = () => (
  <div className="prose dark:prose-invert prose-a:text-primary-600 dark:prose-a:text-primary-500">
    <h1>Prose</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit
      auctor, tempor dolor nec, euismod elit.
    </p>
    <h2>Lorem Ipsum Plan</h2>
    <blockquote>
      "Pellentesque facilisis, tellus vel lobortis malesuada, mauris nisl
      ullamcorper orci, vitae fermentum odio sapien sed sapien."
    </blockquote>
    <p>
      Sed euismod ipsum nec dolor mattis, in gravida odio dapibus. Nullam auctor
      est eget diam blandit, a pellentesque odio sollicitudin.
    </p>
    <ul>
      <li>1st level of lorem: 5 ipsum coins</li>
      <li>2nd level of ipsum: 10 ipsum coins</li>
      <li>3rd level of dolor: 20 ipsum coins</li>
    </ul>
    <p>
      Praesent eget tellus eu ligula posuere vestibulum. Nulla malesuada lorem
      vel suscipit ultrices.
    </p>
    <div>
      <table>
        <thead>
          <tr>
            <th>Royal Treasury</th>
            <th>People&apos;s joy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Empty</td>
            <td>Overflowing</td>
          </tr>
          <tr>
            <td>Modest</td>
            <td>Satisfied</td>
          </tr>
          <tr>
            <td>Full</td>
            <td>Ecstatic</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit
      auctor, tempor dolor nec, euismod elit.
    </p>
  </div>
);
