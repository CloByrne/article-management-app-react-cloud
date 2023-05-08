import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 /*Test that the Articles component renders without crashing*/
import React from 'react';
import { render } from '@testing-library/react';
import Articles from '../views/Articles';

describe('Articles component', () => {
  it('should render without crashing', () => {
    const mockArticles = [
      { id: 1, title: 'Test Article 1', body: 'This is the first test article', published: true },
      { id: 2, title: 'Test Article 2', body: 'This is the second test article', published: false }
    ];
    const mockOnDelete = jest.fn();
    render(<Articles articles={mockArticles} onDelete={mockOnDelete} />);
  });
});
/*Test that the AddArticle component renders without crashing*/
import React from 'react';
import { render } from '@testing-library/react';
import AddArticle from '../components/AddArticle';

describe('AddArticle component', () => {
  it('should render without crashing', () => {
    render(<AddArticle />);
  });
});
/*Test that the EditArticleForm component renders without crashing*/
import React from 'react';
import { render } from '@testing-library/react';
import EditArticleForm from '../components/EditArticleForm';

describe('EditArticleForm component', () => {
  it('should render without crashing', () => {
    const mockOnSave = jest.fn();
    render(<EditArticleForm articleId={1} onSave={mockOnSave} />);
  });
});
/*Test that the handleExpandArticle function toggles the expandedArticleId state correctly*/
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Articles from '../views/Articles';

describe('Articles component', () => {
  it('should toggle the expandedArticleId state when the expand button is clicked', () => {
    const mockArticles = [
      { id: 1, title: 'Test Article 1', body: 'This is the first test article', published: true },
      { id: 2, title: 'Test Article 2', body: 'This is the second test article', published: false }
    ];
    const mockOnDelete = jest.fn();
    const { getByText } = render(<Articles articles={mockArticles} onDelete={mockOnDelete} />);
    const expandButton = getByText('Expand');
    fireEvent.click(expandButton);
    expect(getByText('Collapse')).toBeInTheDocument();
    fireEvent.click(expandButton);
    expect(getByText('Expand')).toBeInTheDocument();
  });
});

