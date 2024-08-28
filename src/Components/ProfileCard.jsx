
export default function ProfileCard() {
  return (
    <>
      <div className="group flex items-center">
        <img className="shrink-0 h-12 w-12 rounded-full" src="../img/maucox-img-profile.png" alt="" />
        <div className="ltr:ml-3 rtl:mr-3">
          <p className="text-sm font-medium text-slate-300 group-hover:text-white">
            Mauricio Cox
          </p>
          <p className="text-sm font-medium text-slate-500 group-hover:text-slate-300">
            React Develop Frontend
          </p>
        </div>
      </div>
    </>
  );
}
