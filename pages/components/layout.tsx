import type { NextPage } from 'next'
import { useState, useCallback } from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import {Col, Row, Container} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css'

export default function Layout({
    children,
    home
  }: {
    children: React.ReactNode
    home?: boolean
  }) {
    return(
        <>
            {/* Header */}
            <nav className={styles.navbar}>
                <Container fluid="true">
                    <Row fluid="true" xs="12" className={styles.row}>
                        <Col fluid="true" xs="6" className={styles.col}>
                            <p className={styles.p}>Powered by <a href="app.eldorado.io">El Dorado Io</a></p>
                        </Col>
                        <Col fluid="true" xs="6" className={styles.col}>
                            {/* <p className={styles.p}>Columna 2</p> */}
                        </Col>
                    </Row>
                </Container>
            </nav>
            <main className={styles.main}>{children}</main>
            {/* Footer */}
            <nav className={styles.navbar}>
                <Container fluid="true">
                    <Row fluid="true" xs="12" className={styles.row}>
                        <Col fluid="true" xs="6" className={styles.col}>
                            <p className={styles.p}>Copyright @ El Dorado Io - All Rights Reserved</p>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </>
    )
}