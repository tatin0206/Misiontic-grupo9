import React from 'react'
//import PropTypes from "prop-types";
import {Container,Section} from 'react-bulma-components'

//Utilizar props
const Header = ({title}) => {
    return (
        <Section>
            <Container>
                <h1 className="title has-text-centered" >{ title }</h1>
            </Container>
        </Section>
    )
}

//es para que el proptype es obligatorio
/* Header.PropTypes = {
    title: PropTypes.element.isRequired
} */

export default Header