export type Certification = {
    text: string
    link: string
    competences: string
}

export type CertificationsListProps = {
    certifications: Certification[]
}