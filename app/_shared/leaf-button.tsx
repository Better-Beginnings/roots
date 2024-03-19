import { cn } from "~/lib/utils";

type BetterBeginningsProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function BetterBeginnings({
  className,
  ...props
}: BetterBeginningsProps) {
  return (
    <a
      className={cn(
        "inline-flex h-[36px] items-center gap-1 rounded-lg border border-black/[0.07] bg-[linear-gradient(90deg,_rgba(255,_232,_232,_0.5)_0%,_rgba(255,_254,_233,_0.5)_19.5%,_rgba(242,_255,_235,_0.5)_43.5%,_rgba(236,_255,_249,_0.5)_67%,_rgba(239,_237,_255,_0.5)_83%,_rgba(255,_239,_249,_0.5)_100%)] px-3 text-sm font-medium text-black/[0.7] shadow-[inset_0px_-1px_0px_rgba(0,_0,_0,_0.07)] transition-all hover:text-black hover:saturate-200",
        className,
      )}
      href="/"
      {...props}
    >
      Hecho por{" "}
      <svg
        className="flex-shrink-0 translate-y-px"
        fill="none"
        height="17"
        viewBox="0 0 134 17"
        width="134"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M1.89941 10.0001C3.47183 10.0001 4.65114 8.1001 4.65114 8.1001C4.65114 8.1001 5.83045 10.0001 7.40289 10.0001C8.97527 10.0001 10.5477 8.1001 10.5477 8.1001C10.5477 8.1001 12.1201 10.0001 13.2994 10.0001"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
          <path
            d="M1.89941 13.1666C3.47183 13.1666 4.65114 11.2666 4.65114 11.2666C4.65114 11.2666 5.83045 13.1666 7.40289 13.1666C8.97527 13.1666 10.5477 11.2666 10.5477 11.2666C10.5477 11.2666 12.1201 13.1666 13.2994 13.1666"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
          <path
            d="M12.0327 6.83324C12.0327 4.38478 10.0478 2.3999 7.59936 2.3999C5.1509 2.3999 3.16602 4.38478 3.16602 6.83324"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
          <path
            d="M19.2998 12.9001V2.42349H23.2162C24.2943 2.42349 25.1333 2.67427 25.7333 3.17583C26.338 3.67271 26.6404 4.34068 26.6404 5.17974C26.6404 5.77974 26.4833 6.26724 26.1693 6.64224C25.8599 7.01724 25.431 7.28912 24.8826 7.45787V7.47193C25.4919 7.5563 26.0052 7.80474 26.4224 8.21724C26.8443 8.62974 27.0552 9.20865 27.0552 9.95396C27.0552 10.8446 26.7435 11.5594 26.1201 12.0985C25.5013 12.6329 24.5732 12.9001 23.3357 12.9001H19.2998ZM20.8466 11.5852H23.2373C23.9498 11.5852 24.4982 11.4469 24.8826 11.1704C25.2716 10.8891 25.4662 10.4813 25.4662 9.94693C25.4662 9.41724 25.2763 8.99771 24.8966 8.68833C24.5216 8.37896 23.9873 8.22427 23.2935 8.22427H20.8466V11.5852ZM20.8466 6.93755H23.1951C23.7904 6.93755 24.2544 6.79458 24.5873 6.50865C24.9248 6.22271 25.0935 5.83365 25.0935 5.34146C25.0935 4.84927 24.9248 4.46021 24.5873 4.17427C24.2544 3.88365 23.7904 3.73833 23.1951 3.73833H20.8466V6.93755ZM31.5763 13.0688C30.8404 13.0688 30.2076 12.9024 29.6779 12.5696C29.1529 12.2368 28.7474 11.7798 28.4615 11.1985C28.1802 10.6126 28.0396 9.94693 28.0396 9.20162C28.0396 8.44693 28.1873 7.77662 28.4826 7.19068C28.7779 6.60474 29.1857 6.14537 29.706 5.81255C30.2263 5.47505 30.824 5.3063 31.499 5.3063C32.2021 5.3063 32.8115 5.47037 33.3271 5.79849C33.8474 6.12662 34.2505 6.58365 34.5365 7.16958C34.8224 7.75083 34.9654 8.42349 34.9654 9.18755V9.58833H29.5021C29.5302 10.2586 29.7224 10.8001 30.0787 11.2126C30.4396 11.6251 30.9458 11.8313 31.5974 11.8313C32.0849 11.8313 32.4857 11.7212 32.7998 11.5008C33.1138 11.2805 33.3224 10.9946 33.4255 10.643H34.8529C34.7638 11.1212 34.5646 11.543 34.2552 11.9087C33.9505 12.2743 33.5662 12.5602 33.1021 12.7665C32.6427 12.968 32.1341 13.0688 31.5763 13.0688ZM29.5162 8.46333H33.5169C33.456 7.87271 33.2474 7.4063 32.8912 7.06412C32.5349 6.71724 32.0755 6.5438 31.513 6.5438C30.9505 6.5438 30.4912 6.71724 30.1349 7.06412C29.7833 7.4063 29.5771 7.87271 29.5162 8.46333ZM39.831 5.47505V6.69849H38.3263V10.9383C38.3263 11.2149 38.3826 11.4071 38.4951 11.5149C38.6076 11.6227 38.8115 11.6766 39.1068 11.6766H39.831V12.9001H38.8958C37.5224 12.9001 36.8357 12.3094 36.8357 11.1282V6.69849H35.5279V5.47505H36.8357V3.45005H38.3263V5.47505H39.831ZM44.0498 5.47505V6.69849H42.5451V10.9383C42.5451 11.2149 42.6013 11.4071 42.7138 11.5149C42.8263 11.6227 43.0302 11.6766 43.3255 11.6766H44.0498V12.9001H43.1146C41.7412 12.9001 41.0544 12.3094 41.0544 11.1282V6.69849H39.7466V5.47505H41.0544V3.45005H42.5451V5.47505H44.0498ZM48.2685 13.0688C47.5326 13.0688 46.8998 12.9024 46.3701 12.5696C45.8451 12.2368 45.4396 11.7798 45.1537 11.1985C44.8724 10.6126 44.7318 9.94693 44.7318 9.20162C44.7318 8.44693 44.8794 7.77662 45.1748 7.19068C45.4701 6.60474 45.8779 6.14537 46.3982 5.81255C46.9185 5.47505 47.5162 5.3063 48.1912 5.3063C48.8943 5.3063 49.5037 5.47037 50.0193 5.79849C50.5396 6.12662 50.9427 6.58365 51.2287 7.16958C51.5146 7.75083 51.6576 8.42349 51.6576 9.18755V9.58833H46.1943C46.2224 10.2586 46.4146 10.8001 46.7708 11.2126C47.1318 11.6251 47.638 11.8313 48.2896 11.8313C48.7771 11.8313 49.1779 11.7212 49.4919 11.5008C49.806 11.2805 50.0146 10.9946 50.1177 10.643H51.5451C51.456 11.1212 51.2568 11.543 50.9474 11.9087C50.6427 12.2743 50.2583 12.5602 49.7943 12.7665C49.3349 12.968 48.8263 13.0688 48.2685 13.0688ZM46.2083 8.46333H50.2091C50.1482 7.87271 49.9396 7.4063 49.5833 7.06412C49.2271 6.71724 48.7677 6.5438 48.2052 6.5438C47.6427 6.5438 47.1833 6.71724 46.8271 7.06412C46.4755 7.4063 46.2693 7.87271 46.2083 8.46333ZM52.9443 12.9001V5.47505H54.3646V6.6774H54.3927C54.5287 6.26958 54.7419 5.95318 55.0326 5.72818C55.3279 5.49849 55.7123 5.38365 56.1857 5.38365C56.2982 5.38365 56.4013 5.38833 56.4951 5.39771C56.5888 5.40708 56.6662 5.41412 56.7271 5.4188V6.80396C56.6708 6.7899 56.5701 6.77583 56.4248 6.76177C56.2794 6.74302 56.1201 6.73365 55.9466 6.73365C55.5294 6.73365 55.1708 6.87896 54.8708 7.16958C54.5755 7.46021 54.4279 7.90787 54.4279 8.51255V12.9001H52.9443ZM61.3888 12.9001V2.42349H65.3052C66.3833 2.42349 67.2224 2.67427 67.8224 3.17583C68.4271 3.67271 68.7294 4.34068 68.7294 5.17974C68.7294 5.77974 68.5724 6.26724 68.2583 6.64224C67.949 7.01724 67.5201 7.28912 66.9716 7.45787V7.47193C67.581 7.5563 68.0943 7.80474 68.5115 8.21724C68.9333 8.62974 69.1443 9.20865 69.1443 9.95396C69.1443 10.8446 68.8326 11.5594 68.2091 12.0985C67.5904 12.6329 66.6623 12.9001 65.4248 12.9001H61.3888ZM62.9357 11.5852H65.3263C66.0388 11.5852 66.5873 11.4469 66.9716 11.1704C67.3607 10.8891 67.5552 10.4813 67.5552 9.94693C67.5552 9.41724 67.3654 8.99771 66.9857 8.68833C66.6107 8.37896 66.0763 8.22427 65.3826 8.22427H62.9357V11.5852ZM62.9357 6.93755H65.2841C65.8794 6.93755 66.3435 6.79458 66.6763 6.50865C67.0138 6.22271 67.1826 5.83365 67.1826 5.34146C67.1826 4.84927 67.0138 4.46021 66.6763 4.17427C66.3435 3.88365 65.8794 3.73833 65.2841 3.73833H62.9357V6.93755ZM73.6654 13.0688C72.9294 13.0688 72.2966 12.9024 71.7669 12.5696C71.2419 12.2368 70.8365 11.7798 70.5505 11.1985C70.2693 10.6126 70.1287 9.94693 70.1287 9.20162C70.1287 8.44693 70.2763 7.77662 70.5716 7.19068C70.8669 6.60474 71.2748 6.14537 71.7951 5.81255C72.3154 5.47505 72.913 5.3063 73.588 5.3063C74.2912 5.3063 74.9005 5.47037 75.4162 5.79849C75.9365 6.12662 76.3396 6.58365 76.6255 7.16958C76.9115 7.75083 77.0544 8.42349 77.0544 9.18755V9.58833H71.5912C71.6193 10.2586 71.8115 10.8001 72.1677 11.2126C72.5287 11.6251 73.0349 11.8313 73.6865 11.8313C74.174 11.8313 74.5748 11.7212 74.8888 11.5008C75.2029 11.2805 75.4115 10.9946 75.5146 10.643H76.9419C76.8529 11.1212 76.6537 11.543 76.3443 11.9087C76.0396 12.2743 75.6552 12.5602 75.1912 12.7665C74.7318 12.968 74.2232 13.0688 73.6654 13.0688ZM71.6052 8.46333H75.606C75.5451 7.87271 75.3365 7.4063 74.9802 7.06412C74.624 6.71724 74.1646 6.5438 73.6021 6.5438C73.0396 6.5438 72.5802 6.71724 72.224 7.06412C71.8724 7.4063 71.6662 7.87271 71.6052 8.46333ZM81.5826 15.9376C80.6732 15.9376 79.9302 15.736 79.3537 15.3329C78.7771 14.9298 78.4396 14.3649 78.3412 13.6383H79.8248C79.9185 13.9993 80.1224 14.2712 80.4365 14.454C80.7505 14.6368 81.1326 14.7282 81.5826 14.7282C82.1826 14.7282 82.6513 14.5665 82.9888 14.243C83.3263 13.9196 83.4951 13.4579 83.4951 12.8579V11.7329H83.488C83.2302 12.1641 82.9044 12.4829 82.5107 12.6891C82.1216 12.8954 81.6833 12.9985 81.1958 12.9985C80.549 12.9985 79.9841 12.8368 79.5013 12.5133C79.0185 12.1852 78.6435 11.7352 78.3763 11.1633C78.1091 10.5868 77.9755 9.92115 77.9755 9.16646C77.9755 8.41177 78.1091 7.74615 78.3763 7.16958C78.6482 6.59302 79.0255 6.14302 79.5083 5.81958C79.9912 5.49146 80.5513 5.3274 81.1888 5.3274C81.6716 5.3274 82.1146 5.43052 82.5177 5.63677C82.9208 5.84302 83.2466 6.16646 83.4951 6.60708H83.5021V5.47505H84.9646V12.8016C84.9646 13.5516 84.8123 14.1563 84.5076 14.6157C84.2029 15.0751 83.7951 15.4102 83.2841 15.6212C82.7732 15.8321 82.206 15.9376 81.5826 15.9376ZM81.4982 11.7258C82.131 11.7258 82.6349 11.4938 83.0099 11.0298C83.3896 10.561 83.5794 9.93755 83.5794 9.15943C83.5794 8.3813 83.3896 7.76021 83.0099 7.29615C82.6349 6.8274 82.131 6.59302 81.4982 6.59302C80.8982 6.59302 80.4107 6.81333 80.0357 7.25396C79.6654 7.6899 79.4802 8.32505 79.4802 9.15943C79.4802 9.9938 79.6654 10.6313 80.0357 11.0719C80.4107 11.5079 80.8982 11.7258 81.4982 11.7258ZM86.638 12.9001V5.47505H88.1216V12.9001H86.638ZM87.3763 4.19537C87.1138 4.19537 86.8912 4.10865 86.7083 3.93521C86.5302 3.75708 86.4412 3.54146 86.4412 3.28833C86.4412 3.03052 86.5302 2.8149 86.7083 2.64146C86.8912 2.46333 87.1138 2.37427 87.3763 2.37427C87.6388 2.37427 87.8615 2.46333 88.0443 2.64146C88.2271 2.8149 88.3185 3.03052 88.3185 3.28833C88.3185 3.54146 88.2271 3.75708 88.0443 3.93521C87.8615 4.10865 87.6388 4.19537 87.3763 4.19537ZM91.2857 8.62505V12.9001H89.8021V5.47505H91.2576V6.59302C91.7638 5.74927 92.5115 5.3274 93.5005 5.3274C94.0115 5.3274 94.4685 5.4399 94.8716 5.6649C95.2794 5.88521 95.6005 6.21333 95.8349 6.64927C96.0693 7.08521 96.1865 7.62662 96.1865 8.27349V12.9001H94.7029V8.4563C94.7029 7.86099 94.5599 7.41333 94.274 7.11333C93.988 6.80865 93.5896 6.6563 93.0787 6.6563C92.5724 6.6563 92.1458 6.81333 91.799 7.1274C91.4568 7.43677 91.2857 7.93599 91.2857 8.62505ZM99.3435 8.62505V12.9001H97.8599V5.47505H99.3155V6.59302C99.8215 5.74927 100.57 5.3274 101.559 5.3274C102.07 5.3274 102.527 5.4399 102.93 5.6649C103.338 5.88521 103.659 6.21333 103.893 6.64927C104.128 7.08521 104.245 7.62662 104.245 8.27349V12.9001H102.761V8.4563C102.761 7.86099 102.618 7.41333 102.332 7.11333C102.046 6.80865 101.648 6.6563 101.137 6.6563C100.631 6.6563 100.204 6.81333 99.8565 7.1274C99.5145 7.43677 99.3435 7.93599 99.3435 8.62505ZM105.918 12.9001V5.47505H107.402V12.9001H105.918ZM106.657 4.19537C106.394 4.19537 106.171 4.10865 105.989 3.93521C105.81 3.75708 105.721 3.54146 105.721 3.28833C105.721 3.03052 105.81 2.8149 105.989 2.64146C106.171 2.46333 106.394 2.37427 106.657 2.37427C106.919 2.37427 107.142 2.46333 107.324 2.64146C107.507 2.8149 107.599 3.03052 107.599 3.28833C107.599 3.54146 107.507 3.75708 107.324 3.93521C107.142 4.10865 106.919 4.19537 106.657 4.19537ZM110.566 8.62505V12.9001H109.082V5.47505H110.538V6.59302C111.044 5.74927 111.792 5.3274 112.781 5.3274C113.292 5.3274 113.749 5.4399 114.152 5.6649C114.56 5.88521 114.881 6.21333 115.115 6.64927C115.349 7.08521 115.467 7.62662 115.467 8.27349V12.9001H113.983V8.4563C113.983 7.86099 113.84 7.41333 113.554 7.11333C113.268 6.80865 112.87 6.6563 112.359 6.6563C111.853 6.6563 111.426 6.81333 111.079 7.1274C110.737 7.43677 110.566 7.93599 110.566 8.62505ZM120.382 15.9376C119.472 15.9376 118.729 15.736 118.153 15.3329C117.576 14.9298 117.239 14.3649 117.14 13.6383H118.624C118.717 13.9993 118.921 14.2712 119.235 14.454C119.549 14.6368 119.932 14.7282 120.382 14.7282C120.982 14.7282 121.45 14.5665 121.788 14.243C122.125 13.9196 122.294 13.4579 122.294 12.8579V11.7329H122.287C122.029 12.1641 121.703 12.4829 121.31 12.6891C120.921 12.8954 120.482 12.9985 119.995 12.9985C119.348 12.9985 118.783 12.8368 118.3 12.5133C117.817 12.1852 117.442 11.7352 117.175 11.1633C116.908 10.5868 116.774 9.92115 116.774 9.16646C116.774 8.41177 116.908 7.74615 117.175 7.16958C117.447 6.59302 117.824 6.14302 118.307 5.81958C118.79 5.49146 119.35 5.3274 119.988 5.3274C120.471 5.3274 120.914 5.43052 121.317 5.63677C121.72 5.84302 122.046 6.16646 122.294 6.60708H122.301V5.47505H123.764V12.8016C123.764 13.5516 123.611 14.1563 123.307 14.6157C123.002 15.0751 122.594 15.4102 122.083 15.6212C121.572 15.8321 121.005 15.9376 120.382 15.9376ZM120.297 11.7258C120.93 11.7258 121.434 11.4938 121.809 11.0298C122.189 10.561 122.378 9.93755 122.378 9.15943C122.378 8.3813 122.189 7.76021 121.809 7.29615C121.434 6.8274 120.93 6.59302 120.297 6.59302C119.697 6.59302 119.21 6.81333 118.835 7.25396C118.464 7.6899 118.279 8.32505 118.279 9.15943C118.279 9.9938 118.464 10.6313 118.835 11.0719C119.21 11.5079 119.697 11.7258 120.297 11.7258ZM128.186 13.0758C127.619 13.0758 127.108 12.9844 126.653 12.8016C126.199 12.6188 125.831 12.3469 125.549 11.986C125.273 11.6251 125.118 11.1774 125.085 10.643H126.548C126.632 11.4774 127.169 11.8946 128.158 11.8946C128.627 11.8946 128.997 11.7985 129.269 11.6063C129.546 11.4141 129.684 11.1704 129.684 10.8751C129.684 10.6219 129.585 10.4204 129.389 10.2704C129.192 10.1157 128.934 10.0032 128.615 9.93287L127.385 9.65865C125.964 9.34927 125.254 8.64146 125.254 7.53521C125.254 6.87896 125.514 6.34458 126.035 5.93208C126.56 5.51958 127.246 5.31333 128.095 5.31333C128.934 5.31333 129.622 5.5313 130.161 5.96724C130.705 6.39849 130.987 6.98912 131.006 7.73912H129.585C129.581 7.37818 129.445 7.08052 129.178 6.84615C128.91 6.60708 128.557 6.48755 128.116 6.48755C127.694 6.48755 127.359 6.58599 127.11 6.78287C126.862 6.97974 126.738 7.22115 126.738 7.50708C126.738 7.76021 126.832 7.96412 127.019 8.1188C127.211 8.27349 127.474 8.38833 127.807 8.46333L129.072 8.74458C129.794 8.90396 130.326 9.15005 130.668 9.48287C131.01 9.81568 131.182 10.2516 131.182 10.7907C131.182 11.2641 131.05 11.6719 130.788 12.0141C130.53 12.3516 130.176 12.6141 129.726 12.8016C129.276 12.9844 128.763 13.0758 128.186 13.0758Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </a>
  );
}
