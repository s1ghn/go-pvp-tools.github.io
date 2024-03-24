type DataResource = {
    repository: "${string}/${string}";
    dataType: "githubTreeSource";
    branch?: string;
    filter?: RegExp;
};

type DataResourceList = {
    [ key: symbol ]: DataResource | string;
};

type GitTreeObject = {
    path: string,
    mode: number,
    type: string,
    sha: string,
    size: number,
    url: string;
};