import { fireEvent, render, screen } from '@testing-library/react'
import Post from '..'
import PostComment from '..'

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })

    test('Deve adicionar cometários, totalizando dois comentários', () => {
        render(<PostComment />)

        fireEvent.change(screen.getByTestId('comment-area'), {
            target: {
                value: 'Adicionando o primeiro comentário',
            }
        })
        fireEvent.click(screen.getByTestId('btn-comment'))

        fireEvent.change(screen.getByTestId('comment-area'), {
            target: {
                value: 'Adicionando o segundo comentário',
            }
        })

        fireEvent.click(screen.getByTestId('btn-comment'))
        expect(screen.getByTestId('comment-1')).toHaveLength(2)
    })
})