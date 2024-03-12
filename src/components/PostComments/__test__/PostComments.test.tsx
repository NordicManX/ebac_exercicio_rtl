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

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Adicionando o primeiro comentário',
            }
        })
        fireEvent.click(screen.getByTestId('comment-button'))

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Adicionando o segundo comentário',
            }
        })

        fireEvent.click(screen.getByTestId('comment-button'))
        expect(screen.getByTestId('area-comment')).toHaveLength(2)
    })
})