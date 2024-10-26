const Footer = () => {
  return (
    <section className=" border-t mt-[50px]">
      <div className="h-[80px] w-full  flex justify-center items-center container">
        <h6 className="text-[14px]">
          &copy; Developed by{" "}
          <a
            href="https://www.monirhrabby.com"
            target="_portfolio"
            className="font-medium text-orange-500 hover:underline"
          >
            Monir Hossain
          </a>
        </h6>
      </div>
    </section>
  );
};

export default Footer;
