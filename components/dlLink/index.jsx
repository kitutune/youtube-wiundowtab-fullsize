export const DlLink = (props) => {
  return (
    <>
      {!props.id ? (
        <a
          href="YoutubeFullSizeWindow.zip"
          download="YoutubeFullSizeWindow.zip"
        >
          <p className="pt-1 text-yellow-50 hover:text-yellow-300">
            DL Google Extensions（Unzip required）
          </p>
        </a>
      ) : null}
    </>
  );
};
