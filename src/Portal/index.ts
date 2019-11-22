import { memo, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { uniqueId } from '~/utils'

import { IPortal } from './types'

const Portal = ({ id = uniqueId(), children }: IPortal) => {
    const el = useRef(document.getElementById(id) || document.createElement('div'))
    const [dynamic] = useState(!el.current.parentElement)

    useEffect(() => {
        if (dynamic) {
            el.current.id = id
            document.body.appendChild(el.current)
        }
        return () => {
            if (dynamic && el.current.parentElement) {
                el.current.parentElement.removeChild(el.current)
            }
        }
    }, [id])
    return createPortal(children, el.current)
}

export default memo(Portal)
