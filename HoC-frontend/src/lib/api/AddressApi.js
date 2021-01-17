import DaumPostcode from 'react-daum-postcode';
const FindAddr = () => {
  const postCodeStyle = {
    display: 'block',
    position: 'absolute',
    width: 500,
    heigth: 500,
    top: '50px',
    zIndex: '100',
    padding: '7px',
  };
  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return (
    <DaumPostcode
      onComplete={handleComplete}
      style={postCodeStyle}
      // height={700}
    />
  );
};

export default FindAddr;
