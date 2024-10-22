import React from "react";

const versions = [
       '4.20.0.0',
       '4.19.1.2',
       '4.19.1.1',
       '4.19.1.0',
       '4.19.0.2',
       '4.19.0.1',
       '4.19.0.0',
       '4.18.2.4',
       '4.18.2.3',
       '4.18.2.2',
       '4.18.2.1',
       '4.18.2.0',
       '4.18.1.1',
       '4.18.1.0',
       '4.18.0.0',
       '4.17.2.0',
       '4.17.1.0',
       '4.17.0.1',
       '4.17.0.0',
       '4.16.1.1',
       '4.16.1.0',
       '4.16.0.0',
       '4.15.2.0',
       '4.15.1.0',
       '4.15.0.0',
       '4.14.1.0',
       '4.14.0.0',
       '4.13.1.0',
       '4.13.0.0',
       '4.12.0.0',
       '4.11.3.0',
       '4.11.2.0',
       '4.11.1.0',
       '4.11.0.0',
       '4.10.0.0',
       '4.9.3.1',
       '4.9.3.0',
       '4.9.2.0',
       '4.9.1.0',
       '4.9.0.1',
       '4.9.0',
       '4.8.1.1',
       '4.8.1',
       '4.8.0.1',
       '4.8.0',
       '4.7.1.1',
       '4.7.1',
       '4.7.0',
       '4.6.2.1',
       '4.6.2',
       '4.6.1',
       '4.6.0',
       '4.5.2.1',
       '4.5.2',
       '4.5.1',
       '4.4.4',
       '4.4.0',
       '4.3.2',
       '4.3.1',
       '4.3.0',
       '4.2.1',
       '4.2.0',
       '4.1.1',
       '4.1.0',
       '4.0.2',
       '4.0.1-incubating',
       '4.0.0-incubating'
]

type ReleaseData = {
    name: string,
    archive: string,
    checksum: string,
    signature: string,
}

function createReleaseData(version: string): ReleaseData {
    const vtag = `apache-cloudstack-${version}`
    const archive = `https://archive.apache.org/dist/cloudstack/releases/${version}/${vtag}-src.tar.bz2`
    return {
        name: vtag,
        archive: archive,
        signature: `${archive}.asc`,
        checksum: `${archive}.sha512`,
    };
}

export default function Releases(): JSX.Element {
    const releases = versions.map(version => createReleaseData(version))
    return <>
        <table>
            <thead>
            <tr>
                <th><b>Name</b></th>
                <th><b>Archive</b></th>
                <th><b>Signature</b></th>
                <th><b>Checksum</b></th>
            </tr>
            </thead>
            <tbody>
            {releases.map(v => (
                <tr key={v.name}>
                    <td>{v.name}</td>
                    <td><a href={v.archive}>tarball</a></td>
                    <td><a href={v.signature}>asc</a></td>
                    <td><a href={v.checksum}>sha512</a></td>
                </tr>
            ))}
            </tbody>
        </table>
    </>
}
