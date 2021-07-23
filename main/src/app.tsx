export const qiankun = fetch('/config.json')
  .then((res) => res.json())
  .then((res: any) => {
    const { apps } = res;

    return {
      apps,
      routes: apps.map((app: any) => ({
        path: `/${app.name}`,
        microApp: app.name,
      })),
    };
  });
