import React from "react"
import styles from "./index.module.css"
import Link from "@docusaurus/Link";

const userData = [
    {
        img: '/users/kddi.jpg',
        title: 'KDDI',
        site: 'https://www.kddi.com/',
    },
    {
        img: '/users/arsat.png',
        title: 'Arsat',
        site: 'https://www.arsat.com.ar/',
    },
    {
        img: '/users/apple.png',
        title: 'Apple',
        site: 'https://apple.com/',
    },
    {
        img: '/users/gtt.png',
        title: 'GTT',
        site: 'https://gtt.net/',
    },
    {
        img: '/users/bt.jpg',
        title: 'BT',
        site: 'https://btcloud.bt.com',
    },
    {
        img: '/users/idc.png',
        title: 'IDC Frontier',
        site: 'https://www.idcf.jp/en/company/',
    },
    {
        img: '/users/fraunhofer.png',
        title: 'Fraunhofer',
        site: 'https://www.fraunhofer.de/',
    },
    {
        img: '/users/sap.jpg',
        title: 'SAP',
        site: 'https://www.sap.com/',
    },
    {
        img: '/users/ntt.png',
        title: 'NTT',
        site: 'https://www.global.ntt',
    },
    {
        img: '/users/kt.jpg',
        title: 'KT',
        site: 'https://www.kt.com/',
    },
    {
        img: '/users/telia.png',
        title: 'Telia Latvia',
        site: 'https://telia.lv/',
    },
    {
        img: '/users/dimsi.png',
        title: 'Dimsi',
        site: 'https://cloud.dimsi.io/'
    },
    {
        img: '/users/m5.png',
        title: 'M5 Hosting',
        site: 'https://www.m5hosting.com/',
    },
    {
        img: '/users/leaseweb.png',
        title: 'Leaseweb',
        site: 'https://www.leaseweb.com/',
    },
    {
        img: '/users/ewerk.png',
        title: 'EWerk',
        site: 'https://www.ewerk.com/',
    },
    {
        img: '/users/storpool.jpg',
        title: 'Storpool',
        site: 'https://storpool.com/',
    },
    {
        img: '/users/linbit.png',
        title: 'Linbit',
        site: 'https://linbit.com/',
    },
    {
        img: '/users/shapeblue.png',
        title: 'ShapeBlue',
        site: 'https://www.shapeblue.com/',
    },
]


export default function UserLogos(): JSX.Element {
    return <>
        <div className={styles.imgWrapper}>{
            userData.map(item => (
                <div className={styles.imgBox} key={item.title}>
                    <Link className={styles.link} rel={"noopener noreferrer"} target={"_blank"} href={item.site}>
                        <img src={item.img} srcSet={item.img} alt={item.title}/>
                    </Link>
                </div>
            ))
        }</div>
    </>
}
