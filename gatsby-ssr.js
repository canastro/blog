import {createElement} from 'react';

const applyDarkModeClass = `
(function() {
  try {
    var mode = localStorage.getItem('theme');
    if (mode === 'light') {
			document.body.classList.add('light');
		}
  } catch (e) {}
})();
`;

export const onRenderBody = ({setPreBodyComponents}) => {
    const script = createElement('script', {
        dangerouslySetInnerHTML: {
            __html: applyDarkModeClass
        }
    });
    setPreBodyComponents([script]);
};
