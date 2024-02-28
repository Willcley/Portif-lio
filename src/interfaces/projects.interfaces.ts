export type TProject = {
    img: string | null,
    isNew: Boolean,
    title: string,
    kenzie: Boolean,
    techList: string[],
    description: string | null,
    finishedAt: Date | string | null,
    linkGithub: string | null,
    publicGithub: Boolean,
    linkAppliaction: string | null,
    online: Boolean
};