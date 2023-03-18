// 작성자 : 이수화

import "../styles/FileListBox.css";

const FileListBox = ({ fileList, setFile }) => {
  // file type
  // hwp : application/haansofthwp
  // pdf : application/pdf
  // image : image/*

  const handleDelete = (idx) => {
    fileList.splice(idx, 1);
    setFile([...fileList]);
  };

  return (
    <div className="FileListBox">
      {fileList.map((file, idx) => {
        return (
          <div key={idx} className="fileBox" onClick={() => handleDelete(idx)}>
            <div>
              <img src="/images/file_icon.png" alt="파일 아이콘" />
            </div>
            <span>{file.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FileListBox;
