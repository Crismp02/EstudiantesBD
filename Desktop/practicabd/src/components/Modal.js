import React, { Component } from "react";
import Portal from "./Portal";

export default class Modal extends Component{
    render(){
        const {children, toggle, active} = this.props;

        return(
            <Portal>
                { active && (
                    <div style={styles.wrapper}>
                        <div style={styles.window}>
                            <button style ={styles.closeBtn} onClick={toggle}>X</button>
                            <div>{children}</div>
                        </div>
                        <div onClick={toggle} style={styles.background}/>
                    </div>
                )}
            </Portal>    
        )
    }
}

const styles = {
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    window: {
        position: 'relative',
        background: '#fff',
        borderRadius: 5,
        padding: 15,
        zIndex: 10,
        boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)"
    },
    closeBtn:{
        position: 'absolute',
        top:10,
        right: 10,
        background: 'rgb(212, 212, 212)',
        borderRadius: 20,
        border: 'none',
        height: '30px',
        width: '30px',
        cursor: 'pointer'
    },
    background:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top:0,
        left: 0,
        background: '#000',
        opacity: 0.5
    }
};