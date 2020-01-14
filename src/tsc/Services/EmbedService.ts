namespace BrickyEditor {
    export namespace Services {
        export class EmbedService {
            static Instagram: string = 'Instagram';

            constructor() {
            }

            public static getEmbedAsync(embedUrl: string): Promise<any> {
                const url = `https://noembed.com/embed?url=${embedUrl}`;
                return new Promise<any>(async (resolve, reject) => {
                    const params = { url: url, type: "get", dataType: "jsonp" };
                    try {
                        const data = await $.ajax(params);
                        resolve(data);
                    }
                    catch (err) {
                        reject(err);
                    }
                });
            }

            public static processEmbed(provider: string) {
                switch (provider) {
                    case EmbedService.Instagram:
                        if (instgrm) {
                            instgrm.Embeds.process();
                        }
                        break;

                    default:
                        break;
                }
            }
        }
    }
}